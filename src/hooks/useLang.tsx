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
    themeTooltip: string;
    langTooltip: string;
    fullScreenTooltip: string;
    screenTooltip: string;
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
    themeTooltip: string;
    langTooltip: string;
    fullScreenTooltip: string;
    screenTooltip: string;
    sendTooltip: string;
    recTooltip: string;
};

type LangType = PTType | ENType;

export default function useLang() {
    const EN = {
        recognitionInstance: 'en',
        question: "Ask a question...",
        waitQuestion: "Waiting a question...",
        makeAnswer: "Make an answer...",
        help: "How can I help you?",
        recording: "Recording...",
        sendMsg: 'Click in Submit',
        light: 'Light',
        dark: 'Dark',
        aqua: 'Blue',
        purple: 'Purple',
        themeTooltip: 'Theme',
        langTooltip: "Lang",
        fullScreenTooltip: 'Full Screen',
        screenTooltip: 'Normal Screen',
        sendTooltip: 'Submit Question',
        recTooltip: 'Record question'
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
        themeTooltip: 'Tema',
        langTooltip: "Idioma",
        fullScreenTooltip: 'Tela Cheia',
        screenTooltip: 'Tela Normal',
        sendTooltip: 'Enviar Pergunta',
        recTooltip: 'Gravar Pergunta'
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
