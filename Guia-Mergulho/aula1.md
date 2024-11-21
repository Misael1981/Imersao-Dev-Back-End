# JavaScript no Back-end e Node.js: Uma Combinação Poderosa

**JavaScript** , tradição associada ao desenvolvimento front-end, ganhou um papel cada vez mais relevante no back-end graças ao **Node.js** . Essa combinação trouxe uma série de benefícios para o desenvolvimento web, tornando-o mais eficiente e unificado.

## O que é Node.js?

O **Node.js** é um ambiente de execução JavaScript de código aberto que permite executar JavaScript fora do navegador. Em outras palavras, ele transforma o JavaScript em uma linguagem completa para desenvolvimento de aplicações, não se limitando apenas ao front-end.

### Características do Node.js:

- **Assíncrono e não bloqueador**: Permite que o servidor trate diversas requisições simultaneamente sem aguardar a conclusão das operações anteriores.
- **Baseado em eventos**: Utilize um modelo de programação orientado para eventos, ou que o torne eficiente para aplicações em tempo real.
- **Módulos**: Possui um vasto ecossistema de módulos (npm) que facilita a reutilização de código e a construção de aplicações complexas.
- **Alta performance**: Graças ao motor V8 do Chrome, o Node.js oferece um alto desempenho, ideal para aplicações que desbloqueiam grande escalabilidade.

### Benefícios de usar JavaScript no Back-end com Node.js:

- **Um único idioma**: Os desenvolvedores podem utilizar a mesma linguagem tanto no front-end quanto no back-end, o que facilita a colaboração e reduz a curva de aprendizado.
- **Alta produtividade**: A comunidade ativa e o grande número de módulos disponíveis aceleram o desenvolvimento de aplicações.
- **Escalabilidade**: O modelo assíncrono do Node.js permite lidar com um grande volume de requisições, tornando-o ideal para aplicações que precisam escalar.
- **Aplicações em tempo real**: O Node.js é perfeito para construir aplicações em tempo real, como chat, jogos online e aplicativos de colaboração.

### Casos de uso comum:

- **APIs RESTful**: Criação de interfaces de programação de aplicações para comunicação entre diferentes sistemas.
- **Aplicações web**: Desenvolvimento de aplicações web completas, desde o front-end até o back-end.
- **Aplicações em tempo real**: Construção de chatbots, jogos online e aplicativos de colaboração.
- **Microsserviços**: Desenvolvimento de pequenas aplicações independentes que trabalham juntas para formar um sistema maior.

### Em resumo:

A combinação de JavaScript e Node.js oferece uma solução poderosa e versátil para o desenvolvimento web. Ao permitir que os desenvolvedores utilizem a mesma linguagem em toda a pilha tecnológica, o Node.js simplifica o desenvolvimento, aumenta a produtividade e abre novas possibilidades para a criação de aplicações inovadoras.

----

# Como iniciar o Projeto

Criar uma pequena estrutura, para indicar que **este** é um projeto **NODE.JS**.

No terminal dar o seguinte comando:

```
npm init es6 -y
```

## O que significa o comando `npm init es6 -y`?

Esse comando é utilizado no Node.js para inicializar rapidamente um novo projeto com algumas configurações pré-definidas para utilizar o ES6 (ECMAScript 6) , que é uma versão mais moderna e com recursos adicionais da linguagem JavaScript.

### Vamos lembrar o comando:

- **npm**: É o gerenciador de pacotes do Node.js, responsável por instalar e gerenciar as dependências de um projeto.
- **init**: É um comando do npm que inicializa um novo projeto, criando um arquivo `package.json` onde são armazenados as informações sobre o projeto, como nome, versão, dependências, etc.
- **es6**: Essa flag indica ao npm que o projeto deve ser configurado para usar o ES6, o que significa que você poderá usar os novos recursos dessa versão do JavaScript.
- **-y**: Essa flag responde "sim" a todas as perguntas que o comando `npm init` faria durante a inicialização, agilizando o processo.

### Em resumo:

Ao executar esse comando, você criará um novo projeto Node.js com as seguintes características:

- **Configuração básica**: O arquivo `package.json` será criado com as informações mínimas necessárias para iniciar o projeto.
- **Suporte ao ES6**: Você poderá utilizar os recursos mais modernos do JavaScript, como `let`, `const`, `arrow` `functions`, `classes`, `módulos`, etc.
- **Processo rápido**: Um sinalizador `-y` automatiza o processo de inicialização, economizando tempo.

### Para que serve:

Esse comando é muito útil para iniciar rapidamente um novo projeto Node.js, especialmente se você já está familiarizado com o ES6 e deseja começar a codificar o mais rápido possível.

### Exemplo:

```
npm init es6 -y
```

Após executar esse comando, você terá um novo diretório com um arquivo `package.json` configurado para usar o ES6. A partir daí, você pode instalar as dependências necessárias para o seu projeto e começar a desenvolver.

# Criar nosso servidor

**Adicionar uma biblioteca chamada Express** ao seu projeto. O Express é um framework web popular que facilita a criação de servidores e aplicações web.

```
Terminal

npm install express
```

Ao executar esse comando, você está dizendo ao Node.js: "Por favor, adicione o framework Express ao meu projeto para que eu possa utilizá-lo para criar uma aplicação web".

## Para que serve:

O **Express** fornece uma estrutura e ferramentas para criar servidores HTTP, definir rotas, manipular requisições e respostas, e muito mais. Ele simplifica o processo de desenvolvimento de aplicações web, permitindo que você se concentre na lógica de sua aplicação.

### O que acontece quando você executa esse comando:

- **O npm busca o pacote**: O npm procura o pacote Express no repositório npm (npmjs.com) e baixa os arquivos necessários.
- **O pacote está instalado**: Os arquivos do Express são acrescentados a uma pasta chamada `node_modules` dentro do seu projeto. Essa pasta armazena todas as dependências do seu projeto.
- **O pacote é registrado**: O npm atualiza o arquivo `package.json` do seu projeto para registrador que o **Express** agora é uma dependência.

## Fazer a importação no arquivo

```
import express from "express"
```

AIzaSyCon8mPiQoZEMM0cBimIHA9lQWhx2r_Bww


