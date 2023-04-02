# Camp Team

## Setup

Antes de iniciar o projeto localmente, renomeie (ou copie) o arquivo `.env.example` para `.env.local`.  
Perceba que a variável de ambiente `NEXT_PUBLIC_USERS_BASE_URL=http://localhost:3000/api/users` guarda um valor de um endpoint que roda na **PORTA 3000**. Em NextJS essa é a porta padrão, fique atento a esse valor caso ocorra algum erro de conexão de API. Para simplificar garanta que a **PORTA 3000** esteja livre.  
Feito isso, escolha prosseguir como [Modo Desenvolvimento](#modo-desenvolvimento) ou [Build](#build).

### Alterar a porta

- [https://nextjs.org/docs/api-reference/cli#development](https://nextjs.org/docs/api-reference/cli#development)
- [https://nextjs.org/docs/api-reference/cli#production](https://nextjs.org/docs/api-reference/cli#production)

## Modo Desenvolvimento

### Passo 1

Baixe as dependências:

```bash
npm i
```

### Passo 2

Execute em modo de desenvolvimento:

```bash
npm run dev
```

## Build

### Passo 1

Baixe as dependências:

```bash
npm i
```

### Passo 2

Execute o processo de build:

```bash
npm run build
```

### Passo 3

Execute em modo de produção:

```bash
npm start
```

## REQUISITOS

- NodeJS: [Instalar](https://nodejs.org/en)
- Versão mínima do NodeJS: [Confira](https://nextjs.org/docs/getting-started#system-requirements)

**NOTA:** Acesse a documentação oficial do NextJS: [NextJS Doc](https://nextjs.org/docs/getting-started). Acesse também o [NextJS](https://nextjs.org/).
