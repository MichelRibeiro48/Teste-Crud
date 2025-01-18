## Teste-Crud
[Video demonstrativo da aplicação rodando]([https://www.youtube.com/watch?v=seu_video](https://www.youtube.com/watch?v=CrMbOJDF-LE))
## Bibliotecas Utilizadas

nesse projeto foram utilizadas as seguintes bibliotecas:

- React
- Next.js
- Json-server
- Zod
- Styled Components
- Tailwind ( padrão da tabela utilizada )
- Shadcn/UI ( Tabela utilizada dessa lib de componentes )
- React Hook Form
- React Toastify
- Axios

## Inicializando o projeto
Para iniciar o projeto é necessário rodar os seguintes comandos:
```bash
npm i
npm run dev
npx json-server src/database/db.json --port 3001
```

## Ojetivos do projeto
Criação de um CRUD de equipamentos onde o usuário preenche um formulário sendo obrigatório preencher nome, tipo, marca e data de aquisição e ao preencher e clicar em adicionar ele adiciona o produto no banco de dados local da aplicação, os produtos sao mostrados em uma tabela logo abaixo e na tabela voce pode editar ou excluir o produto selecionado.

A tabela possui ordenação caso clique na coluna sendo essa ordenação crescente ou decrescente e paginacao a cada 5 produtos.

A aplicação possui resposta do serviços da API caso retorne erro ou sucesso em forma de uma notifição ( Popup ).

## Pontos de melhoria

- Ao alterar o produto seria melhor abrir uma pagina em vez de alterar na tabela
- Adicionar testes unitários
- Melhorar o layout da pagina
