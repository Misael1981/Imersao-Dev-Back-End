# Saiba o que é JSON e como utilizar

<img src="../Guia-Mergulho/img/json-01.webp">

## Introdução

Imagine que você precise desenvolver a funcionalidade de pagamento de faturas para uma nova fintech, com o objetivo de fazer com que o tráfego de dados fosse o mínimo possível para que tudo continuasse funcionando bem mesmo em redes mais lentas ou com largura de banda menor.

## O que é JSON?

O formato **JSON (JavaScript Object Notation)** é, como o nome sugere, uma forma de notação de objetos JavaScript, de modo que eles possam ser representados de uma forma comum a diversas linguagens.

Além disso, uma ideia que está fortemente enraizada neste formato é que ele seja facilmente trafegado entre aplicações em quaisquer protocolos, inclusive o **HTTP**. Portanto, a principal diferença entre um objeto JavaScript padrão e um JSON é o fato do JSON ser na realidade: um texto.

### Manifest.json: o que é

O manifest.json é um arquivo JSON que detalha e especifica metadados básicos sobre sua extensão, como nome, versão e permissões.

### Package.json: o que é

O package.json é um arquivo JSON central em projetos de desenvolvimento de software em JavaScript e Node.js para gerenciar as dependências, informações sobre o projeto, scripts de execução e metadados do projeto.

## JSON x outros formatos

### Qual a diferença entre XML e JSON?

XML (Extensible Markup Language) e JSON (JavaScript Object Notation) são formatos utilizados para representar e estruturar dados, mas há diferenças na sintaxe e aplicabilidade.

O Extensible Markup Language (XML) é uma linguagem de marcação que utiliza tags para definir elementos e estruturar dados. É amplamente utilizado em aplicações que exigem validação e estruturação rígida dos dados, como documentos e configurações.

Por outro lado, o JSON emprega uma estrutura de pares chave-valor, sendo um formato de dados mais conciso e de fácil interpretação. É utilizado em aplicações web e APIs, sendo uma escolha comum para a transferência de dados entre cliente e servidor.

Imagine um aplicativo de um petshop que armazena informações sobre o paciente. 

### Em XML o código ficaria assim:

```
<user>
  <id>11</id>
  <animal>Bob</animal>
  <idade>2</idade>
</user>
```

### Já em JSON, seria representado dessa forma:

```
{
  "user": {
    "id": "11",
    "animal": "Bob",
    "idade": “2”
  }
}
```

### Qual a diferença do formato HTML e JSON?

HTML e JSON possuem funcionalidades diferentes. O HTML (HyperText Markup Language) é uma linguagem de marcação usada para estruturar e exibir conteúdo na web, ele é interpretado pelo navegador e transformado em uma página web visualmente apresentável para os usuários.

Já o JSON (JavaScript Object Notation) é um formato de dados usado para transmitir e armazenar dados de forma organizada e legível por máquinas. Ele é baseado na sintaxe de objetos JavaScript e é amplamente utilizado em APIs para enviar e receber dados entre diferentes sistemas.

O JSON é relativamente mais simples em comparação ao HTML, pois sua estrutura contém apenas as informações importantes para o código; já no HTML, é necessário colocar outras informações e tags que deixam o arquivo maior.

Em um contexto de dados de um usuário, o HTML pode ser utilizado para criar um formulário de entrada de informações, e o JSON pode ser utilizado para formatar essas informações e transmiti-las entre sistemas. Enquanto o HTML é utilizado para estruturar e exibir o conteúdo visual de uma página, o JSON é usado para transmitir e armazenar dados de forma organizada entre sistemas.

## Qual a diferença entre JS e JSON?

JavaScript (JS) é uma linguagem de programação interpretada e estruturada, amplamente utilizada para o desenvolvimento web. Já o JSON é um formato de dados usado para representar e trocar informações entre sistemas computacionais, sendo frequentemente empregado em conjunto com o JavaScript para a transferência de dados em aplicações web.

Para entender melhor essa diferença, imagine que você está desenvolvendo um aplicativo web para armazenar informações de clientes. Você decide usar JavaScript para criar a lógica do aplicativo e manipular os dados no lado do cliente. Por outro lado, você utiliza JSON para trocar dados entre o cliente e o servidor.

## Para que serve o JSON?

O JSON é um formato de dados leve e de fácil leitura utilizado para troca de informações entre sistemas computacionais. Ele é frequentemente usado para transmitir dados entre um servidor e um cliente em aplicações web e móveis, embora também seja utilizado em diversos outros contextos.

Ele é amplamente utilizado na web para representar dados estruturados de forma legível tanto para humanos quanto para máquinas. Em resumo, o JSON é uma forma popular de representar dados estruturados e transferi-los entre diferentes sistemas.

## Por que o JSON é tão utilizado?

A linguagem JSON é bastante usada, por oferecer simplicidade, legibilidade, portabilidade e suporte amplo, o que a torna uma escolha assertiva para a troca de informações na web e em outros ambientes.

Além disso, existem inúmeras outras razões pelas quais o JSON é amplamente utilizado. Confira algumas delas a seguir:

- **Simplicidade**: o formato JSON é relativamente simples e fácil de entender. Ele usa uma sintaxe leve e minimalista, tornando-o rápido de ser processado;

- **Legibilidade**: o JSON é projetado para ser legível tanto por humanos quanto por máquinas. Sua estrutura é organizada e fácil de analisar, facilitando a depuração de erros e o trabalho das pessoas desenvolvedoras;

- **Portabilidade**: ele é independente de plataforma e pode ser utilizado em diferentes linguagens de programação. Isso facilita o compartilhamento de dados entre sistemas heterogêneos, tornando o processo mais eficiente;

- **Suporte amplo**: a mai parte das linguagens de programação possui suporte nativo ou bibliotecas que facilitam a manipulação de dados em formato JSON. Isso torna mais simples o processo de codificação e decodificação de JSON em objetos ou estruturas de dados;

- **Integração com a web**: o JSON é muito utilizado na comunicação entre servidores e clientes em aplicações web, inclusive em APIs (Interface de Programação de Aplicativos), para transferir dados entre servidor e clientes de forma mais eficiente.

## Como usar o JSON? Conheça as regras de utilização

Um **JSON** deve conter apenas informações que possam ser representadas em formato de texto. Listei algumas regras abaixo:

- Não pode ter funções;
- Não pode ter comentários;
- Todo texto sempre tem aspas duplas;
- As propriedades sempre tem aspas duplas.

Desta forma, imagine o envio do pagamento de uma nova fatura com o nome do cliente, um identificador numérico qualquer do cliente e uma lista de pagamentos a serem feitos na fatura em questão. Tais informações teriam, em **JSON**, o seguinte formato:

```
{
   "cliente": {
       "id": 2020,
       "nome": "Maria Aparecida"
   },
   "pagamentos": [
       {
           "id": 123,
           "descricacao": "Compra do livro Cangaceiro JavaScript",
           "valor": 50.5
       },
       {
           "id": 124,
           "descricacao": "Mensalidade escolar",
           "valor": 1500
       }
   ]
}
```

Embora se assemelhe com um objeto **JavaScript** literal, o JSON apresentado segue exatamente todas as regras que citei anteriormente. Além disso, é um formato muito mais simples e menos burocrático do que o mundialmente famoso **XML** que durante muito tempo, foi utilizado como padrão para o envio de informações entre aplicações.

Como você está usando **JavaScript**, **Java** e **PHP** nas aplicações em que estão envolvidos, trouxe um pequeno exemplo nestas linguagens:

```
// JavaScript

const fatura = // Criação do objeto fatura.

const faturaJSON = JSON.stringify(fatura); // Transforma o objeto literal em JSON.

const novamenteObjFatura = JSON.parse(faturaJSON); // Transforma o JSON em objeto literal.
```

```
// PHP

$fatura = // Criação do objeto fatura.

$faturaJSON = json_encode($meuObj); // Transforma o objeto em JSON.

$novamenteObjFatura = json_decode($faturaJSON); // Transforma o JSON em objeto.
```

```
// Java usando a biblioteca Jackson

Fatura fatura = // Criação do objeto fatura.

ObjectMapper mapper = new ObjectMapper();

String jsonString = mapper.writeValueAsString(fatura); // Objeto Java para JSON string.

Fatura novamenteFatura = mapper.readValue(jsonString, Fatura.class); //JSON string para objeto Java.
```


Com isso, você vai conseguir trafegar as informações que precisa, atendendo aos requisitos que levantamos no início deste artigo.

## Como passar uma data em JSON?
Há várias maneiras de formatar datas, mas uma das formas comuns é usando o formato ISO 8601, que é amplamente aceito e suportado em muitas linguagens de programação. Por exemplo:

```
{
  "date": "2023-08-24T16:10:10Z"
}
```


## Como passar HTML para JSON?

Você pode usar bibliotecas específicas como Cheerio, jsdom e Puppeteer para fazer o parsing do HTML e extrair os dados desejados. Uma outra forma mais fácil é usar algum conversor online, basta buscar por “HTML to JSON” no navegador. No entanto, se seu código HTML for mais complexo e você precisar de um alto nível de controle da conversão, é recomendado desenvolver sua própria lógica para analisar o HTML e extrair os dados necessários para convertê-los em JSON.

## Como ler um arquivo JSON?

Uma maneira fácil e prática de ler um arquivo JSON é através de um visualizador online gratuito. Basta buscar por “visualizador online JSON” em seu navegador.

Ainda há uma questão que vocês nem mesmo perceberam! O que acontecerá quando persistir em suas aplicações o nome de uma cliente que, porventura, se chame, digamos, Joana D'arc? Você não sabe? Fique atento(a)! No próximo artigo vou mostrar a você o que este simples nome pode gerar!

- ### [Artigo de Gabriel Leite para a ALURA](https://www.alura.com.br/artigos/o-que-e-json)

### [Menu Criando e Estruturando sua Primeira API com GET e Banco de Dados](menu.md)
