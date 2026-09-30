# Arquitetura

Léo AI é uma SPA React/Vite com integração de IA e navegação client-side.

## Camadas

- **UI**: React, rotas, temas, internacionalização e componentes.
- **Application**: orquestração das conversas e estados da interface.
- **AI integration**: chamadas server-side/proxy para o provedor de IA, sem expor segredos ao cliente.
- **Delivery**: Vite build, Docker estático com Nginx não-root e GitHub Actions.

O pipeline valida type checking, lint, testes, cobertura mínima de 80% e build.
