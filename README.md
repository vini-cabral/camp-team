# Camp Team

Visite o projeto: [https://camp-team.vercel.app/](https://camp-team.vercel.app/)

## Setup

Antes de iniciar o projeto localmente, renomeie (ou copie) o arquivo `.env.example` para `.env.local`.  
Perceba que a variável de ambiente `NEXT_PUBLIC_USERS_BASE_URL=http://localhost:3000/api/users` guarda um caminho de um endpoint que roda na **PORTA 3000**. Em NextJS essa é a porta padrão, fique atento a esse valor caso ocorra algum erro de conexão de API. Para simplificar garanta que a **PORTA 3000** esteja livre.  
Feito isso, escolha prosseguir como [Modo Desenvolvimento](#modo-desenvolvimento) ou [Build](#build).

### Alterar a porta

- [https://nextjs.org/docs/api-reference/cli#development](https://nextjs.org/docs/api-reference/cli#development)
- [https://nextjs.org/docs/api-reference/cli#production](https://nextjs.org/docs/api-reference/cli#production)

## Modo Desenvolvimento

### PASSO 1

Baixe as dependências:

```bash
npm i
```

### PASSO 2

Execute em modo de desenvolvimento:

```bash
npm run dev
```

## Build

### PASSO 1

Baixe as dependências:

```bash
npm i
```

### PASSO 2

Execute o processo de build:

```bash
npm run build
```

### PASSO 3

Execute em modo de produção:

```bash
npm start
```

## Variáveis de Ambiente

São utilizados dois modos, veja:

### MODO 1 _.env_

- `USERS_BASE_URL`: Guarda o endpoint usado no lado do servidor.
- `NEXT_PUBLIC_USERS_BASE_URL`: Guarda o endpoint usado no lado do cliente.

Variáveis de ambiente que tem seus valores alterados conforme o contexto, ou seja, os valores podem mudar em ambiente de desenvolvimento, testes, produção e etc... No caso dessa aplicação ficou assim:

- Modo de Desenvolvimento:

  - `USERS_BASE_URL=https://randomuser.me/api/1.4`
  - `NEXT_PUBLIC_USERS_BASE_URL=http://localhost:3000/api/users`

- Modo de Produção:
  - `USERS_BASE_URL=https://randomuser.me/api/1.4`
  - `NEXT_PUBLIC_USERS_BASE_URL=https://camp-team.vercel.app/api/users`

**NOTA**: Em NextJS o prefixo `NEXT_PUBLIC` torna visível a variável no lado do cliente, cuidado ao utilizar tokens!

### MODO 2 _src/env_

Note que no diretório _src/env_, também existem variáveis de escopo global, todas são potencialmente públicas e foram utilizadas para guardar valores como
número máximo de paginação, quantidade de itens retornados por consulta e etc.

- `PUB_RESULTS`: quantidade de itens retornados
- `PUB_MAX_PAGE`: número máximo de paginação
- `PUB_SCREEN_MODE`: define se o padrão de tela será dark ou light
- `PUB_APP_ROUTES`: lista de rotas do front-end para geração dinâmica do menu na barra de navegação

## REQUISITOS

- NodeJS: [Instalar](https://nodejs.org/en)
- Versão mínima do NodeJS: [Confira](https://nextjs.org/docs/getting-started#system-requirements)

**NOTA:** Acesse a documentação oficial do NextJS: [NextJS Doc](https://nextjs.org/docs/getting-started). Acesse também a página do [NextJS](https://nextjs.org/).
