## Teste-Crud
[Video demonstrativo da aplicação rodando](https://youtu.be/CrMbOJDF-LE)
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
- React Query
- Vitest ( Testes unitários e E2E )

## Inicializando o projeto
Para iniciar o projeto é necessário rodar os seguintes comandos:
```bash
npm i
npm run dev
npx json-server src/database/db.json --port 3001
```

## Rodando Testes
```bash
#(Rodar o teste uma unica vez) 
npm run test
#(Rodar os testes atualizando com novas alterações)
npm run test:watch
#( Gerar a cobertura de testes )
npm run test:coverage
```

## Ojetivos do projeto
Criação de um CRUD de equipamentos onde o usuário preenche um formulário sendo obrigatório preencher nome, tipo, marca e data de aquisição e ao preencher e clicar em adicionar ele adiciona o produto no banco de dados local da aplicação, os produtos sao mostrados em uma tabela logo abaixo e na tabela voce pode editar ou excluir o produto selecionado.

A tabela possui ordenação caso clique na coluna sendo essa ordenação crescente ou decrescente e paginacao a cada 5 produtos.

A aplicação possui resposta do serviços da API caso retorne erro ou sucesso em forma de uma notifição ( Popup ).

Foi adicionado o React Query para finalidade de fazer requisição somente quando necessário, e caso for um PATCH ou POST de um equipamento ele atualizar os dados locais e nao realizar requisicao de GET novamente

## Pontos de melhoria

- Adicionar mais testes unitários
- Melhorar o layout da pagina
