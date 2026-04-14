# FRONT-API-FIT

## Descrição

Projeto front-end desenvolvido em React + Vite para um dashboard fitness/nutricional. O app permite login por ID, visualização de métricas diárias (calorias, proteínas, carboidratos e gorduras) e registro de refeições via API.

## Funcionalidades

- Tela de login simples com ID armazenado em `localStorage`
- Dashboard com gráficos de progresso usando `recharts`
- Registro de refeições com envio de dados à API (`/daily/registrar`)
- Navegação com `react-router-dom`
- Tratamento de carregamento e erro com páginas específicas

## Páginas

- `/` ou `/login`: tela de login
- `/dashboard`: painel de usuário com gráficos
- `/registrarRefeicao`: formulário para registrar nova refeição
- `*`: página 404 (NotFound)

## Tecnologias

- React 19
- Vite
- Zustand
- Axios
- React Router DOM
- Recharts
- Bootstrap
- React Icons

## Variáveis de ambiente

O app usa a variável de ambiente:

- `VITE_API_URL` — URL base da API usada pelo `axios`

Exemplo de `.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Instalação

```bash
npm install
```

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

