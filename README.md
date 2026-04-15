# 🍎 FRONT-API-FIT

[![React](https://img.shields.io/badge/React-19.2.4-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF.svg)](https://vitejs.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.12-orange.svg)](https://zustand-demo.pmnd.rs/)
[![Axios](https://img.shields.io/badge/Axios-1.15.0-5A29E4.svg)](https://axios-http.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.14.0-CA4245.svg)](https://reactrouter.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.8.1-FF6B6B.svg)](https://recharts.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3.svg)](https://getbootstrap.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.6.0-61DAFB.svg)](https://react-icons.github.io/react-icons/)
[![React Select](https://img.shields.io/badge/React_Select-5.10.2-61DAFB.svg)](https://react-select.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.4-4B32C3.svg)](https://eslint.org/)

## 📋 Descrição

Projeto front-end desenvolvido em **React + Vite** para um dashboard fitness/nutricional. O app permite login por ID, visualização de métricas diárias (calorias, proteínas, carboidratos e gorduras) e registro de refeições via API.

## ✨ Funcionalidades

- 🔐 Tela de login simples com ID armazenado em `localStorage`
- 📊 Dashboard com gráficos de progresso usando `Recharts`
- 🍽️ Registro de refeições com envio de dados à API (`/daily/registrar`)
- 🧭 Navegação com `React Router DOM`
- ⏳ Tratamento de carregamento e erro com páginas específicas

## 📄 Páginas

- `/` ou `/login`: tela de login
- `/dashboard`: painel de usuário com gráficos
- `/registrarRefeicao`: formulário para registrar nova refeição
- `*`: página 404 (NotFound)

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **Vite** - Ferramenta de build rápida
- **Zustand** - Gerenciamento de estado
- **Axios** - Cliente HTTP para requisições API
- **React Router DOM** - Roteamento para aplicações React
- **Recharts** - Biblioteca de gráficos
- **React Icons** - Ícones para React
- **React Select** - Componente de seleção customizável

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd front-fit
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (veja abaixo).

4. Execute o projeto:
   ```bash
   npm run dev
   ```

## 📖 Uso

Após a instalação, acesse `http://localhost:5173` (porta padrão do Vite) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza a build de produção

## 🌍 Variáveis de Ambiente

O app usa a variável de ambiente:

- `VITE_API_URL` — URL base da API usada pelo `axios`

Exemplo de `.env`:

```env
VITE_API_URL=http://localhost:3000
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## Uso

```bash
npm run dev
```

Acesse `http://localhost:5173` ou a porta exibida pelo Vite.

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — cria o build de produção
- `npm run lint` — executa o ESLint
- `npm run preview` — pré-visualiza o build de produção

## Observações

- O login atual grava somente o `userId` no `localStorage` sem validação de senha real.
- O dashboard obtém os dados do usuário através de `src/store/useUserStore.js`.

## Estrutura principal

- `src/App.jsx` — componente raiz
- `src/routes/routes.jsx` — configuração de rotas
- `src/pages/Login.jsx` — tela de login
- `src/pages/Dashboard.jsx` — painel com gráficos
- `src/pages/RegistrarRefeicao.jsx` — cadastro de refeição
- `src/store/useUserStore.js` — estado global do usuário
- `src/services/api.js` — cliente Axios e chamadas à API

