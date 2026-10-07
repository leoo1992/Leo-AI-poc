import type useGPT from "../hooks/useGPT";

export type GPTController = ReturnType<typeof useGPT>;
export type GPTProps = { GPT: GPTController };
