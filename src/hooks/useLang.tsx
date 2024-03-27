import { useState } from "react"

type ENType = {
    recognitionInstance: string;
    question: string;
    waitQuestion: string;
    makeAnswer: string;
    help: string;
    recording: string;
    sendMsg: string;
    light: string;
    dark: string;
    aqua: string;
    purple: string;
};

type PTType = {
    recognitionInstance: string;
    question: string;
    waitQuestion: string;
    makeAnswer: string;
    help: string;
    recording: string;
    sendMsg: string;
    light: string;
    dark: string;
    aqua: string;
    purple: string;
};

type LangType = PTType | ENType;

export default function useLang() {
    const EN = {
        recognitionInstance: 'en',
        question: "Ask a question...",
        waitQuestion: "Await a question...",
        makeAnswer: "Make an answer...",
        help: "How can I help you?",
        recording: "Recording...",
        sendMsg: 'Click submit',
        light: 'Light',
        dark: 'Dark',
        aqua: 'Blue',
        purple: 'Purple',
    }

    const PT = {
        recognitionInstance: 'pt-BR',
        question: "Pergunte algo...",
        waitQuestion: "Aguardando uma pergunta...",
        makeAnswer: "Gerando uma resposta...",
        help: "Como posso te ajudar?",
        recording: "Gravando...",
        sendMsg: 'Clique em enviar',
        light: 'Claro',
        dark: 'Escuro',
        aqua: 'Azul',
        purple: 'Roxo',
    }

    const [lang, setLang] = useState<LangType>(PT);

    const handleChangeLang = (selectedLang: LangType) => {
        setLang(selectedLang);
    }

    return {
        lang,
        setLang,
        EN,
        PT,
        handleChangeLang
    }
}
