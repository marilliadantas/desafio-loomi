<h1 align="center"> AUTOMAÇÃO WEB - KASA LIVE ⚽ </h1>

![STATUS](https://img.shields.io/static/v1?label=STATUS&message=%20Finalizado&color=&style=for-the-badge)

## 💬 Sobre o projeto
Este projeto foi desenvolvido como parte de um desafio técnico para a empresa Loomi. O objetivo deste desafio é demonstrar habilidades em automação de testes utilizando o framework Cypress. Os testes foram realizados no site [Kasa](https://www.kasa.live).

## 💻 Tecnologias utilizadas

- Node js
- Cypress

## 📋 Pré-requisitos
- Instalar o [Node.js](https://nodejs.org/)
- Instalar a IDE [Visual Studio Code](https://code.visualstudio.com/download)
- Instalar o [Git](https://git-scm.com/downloads) 

##  📥 Clonando o projeto:
```bash
git clone https://github.com/marilliadantas/desafio-loomi
  ```

##  👩🏻‍💻​ Para instalar as dependências e os plugins:

Abra o terminal no VSCode (use CTRL + J) e digite o seguinte comando:

```bash
npm install
  ```

### Comando para abrir o cypress:

```bash
npx cypress open
  ```

#### Rodando em modo headless:
```bash
npm run test
```

#### Gerar relatório:
```bash
npm run allure:report
```
Para visualizar o relatório, abra a pasta "Allure report" e abra o arquivo index.html. 

## Estrutura do Projeto Cypress

Este projeto utiliza uma estrutura organizada por funcionalidade para gerenciar os testes e comandos relacionados. Abaixo está a organização geral do projeto:

    desafio-loomi
    ├── .github
    │   └── workflows
    │       └── ci.yml
    ├── cypress
    │   ├── e2e
    │   │   ├── cadastro
    │   │   │   └── cadastro.cy.js
    │   │   ├── calendario
    │   │   │   └── calendario.cy.js
    │   │   ├── favoritos
    │   │   └── favoritos.cy.js
    │   │   ├── home
    │   │   │   └── home.cy.js
    │   │   ├── login
    │   │   │   └── login.cy.js
    │   │   ├── melhoresMomentos
    │   │   │   └── melhoresMomentos.cy.js
    │   │   ├── partidas
    │   │   │   └── partidas.cy.js
    │   │   ├── perfil
    │   │   │   └── perfil.cy.js
    │   ├── fixtures
    │   │   └── login_data.json
    │   ├── support
    │   │   ├── elements
    │   │   │   ├── cadastroElements.js
    │   │   │   ├── homeElements.js
    │   │   │   ├── loginElements.js
    │   │   │   ├── modalElements.js
    │   │   │   ├── partidasElements.js
    │   │   │   └── perfilElements.js
    │   │   ├── pages
    │   │   │   ├── cadastroPage.js
    │   │   │   ├── homePage.js
    │   │   │   ├── loginPage.js
    │   │   │   ├── modalPage.js
    │   │   │   ├── partidasPage.js
    │   │   │   └── perfilPage.js
    │   │   ├── actions.js
    │   │   ├── commands.js
    │   │   └── e2e.js
    ├── node_modules
    ├── .gitignore
    ├── cypress.config.js
    ├── cypress.env.json
    ├── jsconfig.json
    ├── package.json
    ├── package-lock.json
    └── readme.md

## Recursos
- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Exemplos](https://github.com/cypress-io/cypress-example-recipes)