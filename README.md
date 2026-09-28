# Léo IA

Assistente conversacional responsivo desenvolvido com React, TypeScript, Vite, Tailwind CSS e DaisyUI. O projeto inclui entrada por texto e voz, português/inglês, temas persistentes, modo tela cheia e integração server-side com Google Gemini 3.8 Flash pela Interactions API.

## Funcionalidades
- Chat com IA via endpoint server-side `/api/chat` usando Gemini 3.8 Flash e Interactions API
- Segredo da API mantido fora do bundle do navegador
- Português e inglês com bandeiras no seletor
- Temas Claro, Escuro, Azul e Roxo com persistência
- Reconhecimento de voz quando suportado pelo navegador
- Layout responsivo para desktop, tablet, celular e landscape
- Tratamento de erro da API sem spinner infinito
- Vercel Analytics

## Desenvolvimento
```bash
npm install
npm run dev
```

Crie `.env.local` a partir de `.env.example` e defina `GOOGLE_API_KEY`. Em produção, configure a mesma variável no projeto da Vercel.

## Qualidade
```bash
npm test
npm run lint
npm run build
```

O GitHub Actions executa testes, lint e build em pushes e pull requests.

## Deploy
A aplicação é preparada para Vercel. O endpoint em `api/chat.js` é executado como função server-side.

## Segurança
Não versione chaves de API. Variáveis com prefixo `VITE_` são públicas no bundle e não devem conter segredos.

## Licença
MIT.
