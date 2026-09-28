export default function useAuthAPI() {
  const endpoint = import.meta.env.VITE_AI_ENDPOINT?.trim() || "/api/chat";
  return { endpoint };
}
