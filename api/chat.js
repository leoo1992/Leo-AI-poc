export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido." });
  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";
  if (!prompt) return res.status(400).json({ error: "Envie uma pergunta." });

  const key = process.env.GOOGLE_API_KEY;
  if (!key) return res.status(503).json({ error: "A IA ainda não foi configurada no servidor." });

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": key,
      },
      body: JSON.stringify({
        model: "gemini-3.8-flash",
        input: prompt,
        generation_config: { thinking_level: "low" },
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Gemini API error", response.status, data?.error?.message || "Unknown error");
      return res.status(response.status).json({ error: "Não foi possível gerar a resposta agora. Tente novamente." });
    }

    const direct = typeof data?.output_text === "string" ? data.output_text.trim() : "";
    const stepText = Array.isArray(data?.steps)
      ? data.steps.flatMap((step) => Array.isArray(step?.content) ? step.content : [])
          .filter((item) => item?.type === "text" && typeof item?.text === "string")
          .map((item) => item.text).join("").trim()
      : "";
    const text = direct || stepText;
    return res.status(200).json({ text: text || "Não foi possível gerar uma resposta." });
  } catch (error) {
    console.error("Gemini interaction failed", error);
    return res.status(502).json({ error: "Falha de comunicação com o serviço de IA." });
  }
}
