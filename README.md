# 🤖 Sample backend with NestJs

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Gabriel%20Patrola-blue?style=flat&logo=Awesome-Lists">
  <a href="./assets/leroy-equests.postman_collection.json" target="_blank" rel="noopener"><img alt="Run in Postman" src="https://run.pstmn.io/button.svg"></a>
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
  <span> · </span>
  <a href="#-material-de-apoio">Material de apoio</a>
</h3>

## 💭 Sobre

### Funcionalidade da interface

A API atende os seguintes critérios:

- Receberá uma planilha de produtos (segue em anexo), que deverá ser processada em background (queue)
- Ter um endpoint que informe se a planilha foi processada com sucesso ou não
- Seja possível visualizar, atualizar e apagar os produtos (só é possível criar novos produtos via planilha).

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener">Typescript</a>
- <a href="https://docs.nestjs.com/" target="_blank" rel="noopener">Nestjs</a>
- <a href="https://docs.docker.com/" target="_blank" rel="noopener">Docker</a>

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter em sua máquina:

- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação
- Ter o **<a href="https://www.docker.com/" target="_blank" rel="noopener">Docker</a>** para facilitar o setup do banco de dados e redis
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/teste-leroy-merlin.git
  # Entre na pasta raiz da aplicação
  $ cd teste-leroy-merlin
```

2. Instalar as dependências da aplicação

```sh
  $ yarn # ou npm install
```

3. Configurar as variáveis de ambiente

Crie um arquivo chamado de '.env' copiando as informações existentes no arquivo '.env.example'.

4. Iniciar docker da aplicação, este ja iniciará o mysql + redis

```sh
  # Comando para iniciar a aplicação em modo de desenvolvimento
  $ docker-compose up -d
```

5. Inicie a aplicação

```sh
  $ yarn start:dev # ou npm run start:dev
```

5. Testando a aplicação

```sh
  # Comando para realizar os testes
  $ yarn test:e2e # ou npm run test:e2e
```

## 📚 Material de apoio

- **<a href="./assets/leroy-equests.postman_collection.json" target="_blank" rel="noopener">Postman</a>** com as requisições

---

<sup> Feito com 💙 por <a href="https://github.com/gabrielpatrola" target="_blank" rel="noopener">Gabriel Patrola</a>.
