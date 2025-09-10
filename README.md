Cadastro de Usuários

Aplicação React + Vite (frontend) com Node.js/Express (backend) para cadastrar usuários (nome, idade e e-mail) e exibir a lista com ícones e dados.

✨ Funcionalidades

Formulário de cadastro (nome, idade, e-mail).

Lista de usuários cadastrados com ícones.

Navegação com React Router.

Comunicação Axios com a API Node/Express.

🛠️ Stack

Frontend

React (Vite)

React Router

Axios

Styled-Components

Backend(OBS: O backend está em outro repositório de pasta parecida)

Node.js + Express

📁 Estrutura (sugerida)
/
├── frontend/                 # React + Vite
│   ├── src/
│   └── .env                  # VITE_API_URL=http://localhost:3000
└── backend/                  # Node/Express
    ├── server.js
    └── .env                  # PORT=3000

🔑 Variáveis de ambiente
Frontend (frontend/.env)
VITE_API_URL=http://localhost:3000

Backend (backend/.env)
PORT=3000
# Outras chaves se necessário (ex.: DB_URL etc.)

▶️ Como rodar localmente
1) Backend
cd backend
npm install
npm run dev   # ou npm start (conforme seu package.json)

2) Frontend
cd frontend
npm install
npm run dev


Frontend: http://localhost:5173 (porta padrão do Vite)

Backend: http://localhost:3333 (ou a porta definida no .env)

🔗 Endpoints da API
POST /usuarios

Cadastra um novo usuário.

Body (JSON)

{
  "name": "Miguel",
  "age": 19,
  "email": "miguel@email.com"
}

GET /usuarios

Lista todos os usuários.

GET /buscar/usuario/:id

Retorna um usuário pelo id.

🧩 Scripts úteis
Frontend (frontend/package.json)

dev – roda o Vite em desenvolvimento

build – build de produção

preview – preview do build

Backend (backend/package.json)

dev – inicia o servidor em dev (ex.: com nodemon)

start – inicia o servidor em produção

Exemplo:

{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  }
}

🧭 Rotas do frontend (React Router)

/ – página de cadastro

/usuarios – lista de usuários

🎨 Estilo

Styled-Components para estilização.

Ícones: use a lib que preferir (ex.: react-icons).

👤 Autor

Miguel Vitor Ferraz Braz
