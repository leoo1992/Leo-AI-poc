export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido." });
  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";
  if (!prompt) return res.status(400).json({ error: "Envie uma pergunta." });
  const key = process.env.GOOGLE_API_KEY;
  if (!key) return res.status(503).json({ error: "A IA ainda não foi configurada no servidor." });
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(key)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data?.error?.message || "Erro no provedor de IA." });
    const text = data?.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
    return res.status(200).json({ text: text || "Não foi possível gerar uma resposta." });
  } catch {
    return res.status(502).json({ error: "Falha de comunicação com o serviço de IA." });
  }
}
