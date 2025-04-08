# 🧑‍💻 newbacon-teste-frontend

Projeto frontend desenvolvido com **Vue 3 + Vite**, que consome dados da API [Reqres](https://reqres.in/) para realizar operações básicas de CRUD (Create, Read, Update, Delete) com usuários.

## [Ver aplicação online](https://newbacon-teste-frontend.vercel.app/)

## 🚀 Funcionalidades

- ✅ Listar usuários paginados
- 👁️ Visualizar detalhes de um usuário
- ➕ Criar novo usuário
- ✏️ Editar informações de um usuário
- 🗑️ Excluir usuário
- 📄 Paginação de resultados

## 🛠️ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/newbacon-teste-frontend.git
cd newbacon-teste-frontend

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_API_URL=https://reqres.in/api
```

## 📁 Estrutura do Projeto

```
src/
├── components/      # Componentes reutilizáveis
├── views/           # Páginas do sistema
├── router/          # Arquivo de rotas
├── assets/          # Imagens e ícones
├── App.vue          # Componente principal
└── main.js          # Ponto de entrada
```

## 🎨 Estilo

- Design simples e responsivo
- Componente de botão com estado desabilitado customizado
- Ícones SVG para ações (editar, excluir, visualizar)
