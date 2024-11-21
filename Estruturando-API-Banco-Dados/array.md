# JavaScript: para que serve um Array?

<img src="../Guia-Mergulho/img/array-01.webp">

## Introdução

Imagine que você precisa organizar seu guarda-roupa, e para isso, deve guardar seus chapéus em uma gaveta, suas calças em outra e suas meias em outra. Um array é uma **estrutura** semelhante ao guarda-roupa, onde você pode **guardar** “coisas” em um espaço reservado. Neste artigo vamos entender o que é um array e para que ele serve. Vamos falar também:

- Como funciona um array;
- Como colocar array em Javascript;
- Métodos de arrays utilizados em Javascript.

## O que é um array?

Os arrays são estruturas que servem para **guardar dados**, e **organizá-los**. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de **índice**. Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que precisar de calças, chapéus ou meias, vai saber em que gaveta buscar.

## Para que serve um array?

De forma mais robusta, um array é uma estrutura de dados que serve para guardar elementos em um espaço da memória. Estes espaços da memória são chamados de variáveis. 

## Como funciona um Array em Javascript?

Para entender melhor o que é Array JavaScript e como ele funciona, acompanhe o exemplo a seguir. Imagine que você precisa comprar frutas no supermercado. Você logo pega uma folha de papel e uma caneta e anota cada item, um abaixo do outro, da seguinte forma:

### Lista de Frutas:

1. Maçãs;
2. Uvas;
3. Bananas;
4. Abacaxi;
5. Morangos;

Se alguém perguntar qual a terceira coisa que você precisa comprar, logo você irá olhar sua lista e responder “Bananas”.

Em Javascript os arrays se comportam de forma parecida ao buscar o item na lista, a diferença é que ele começa a contar do zero, assim:

### Array JavaScript - Exemplo: Lista de Frutas

|**Número**|	**Frutas**|
|----|----|
|0|	Maçãs|
|1|	Uvas|
|2|	Bananas|
|3|	Abacaxi|
|4|	Morangos|

Cada item é um elemento, e cada elemento é acessado por um índice que começa do zero. Além disso, podemos trocar os elementos, acrescentar e remover como bem entendermos.

### Como declarar um Array em JavaScript?

Existem duas formas de declarar um array em Javascript, mas a mais comum delas é criando uma variável da seguinte forma:

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
```

Em que cada item da lista é separado por vírgulas e ocupa uma posição do array listaDeFrutas iniciando no índice zero. Essa forma é chamada de método literal de array.

## Acessando um elemento do array

Podemos acessar elementos de um array buscando por seu índice, da seguinte forma:

```
var primeiroItem = listaDeFrutas[0]; // Pega o item 'Maçãs'
var segundoItem = listaDeFrutas[1]; // Pega o item 'Uvas'
var terceiroItem = listaDeFrutas[2]; // Pega o item 'Bananas'
```

Outra forma de acessar os elementos de um array é iterando sobre ele, ou seja, percorrendo todos os elementos através de **estruturas de repetição** como `while`, `for`, e `forEach()`.

```
listaDeFrutas.forEach(function (item, indice) {
  console.log(item, indice);
});
// Maçãs 0
// Uvas 1
// Bananas 2
// Abacaxi 3
// Morangos 3
```


Nem o tamanho e nem os tipos de elementos são fixos em um array, já que podemos acrescentar e remover os seus elementos. Vamos conhecer alguns métodos bastante utilizados no dia a dia de um programador ou programadora ao lidar com arrays.

# Métodos de Array em JavaScript

Existem alguns **métodos** muito usados por desenvolvedores e desenvolvedoras ao lidar com arrays.

## Acessando um elemento pelo seu índice

Podemos acessar o índice de um elemento com o indexOf() passando como parâmetro o elemento.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Bananas');
//pos = 2
```

## Adicionar elementos

Para adicionar um elemento ao final do array podemos usar o `push()`.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.push('Laranjas');
// ['Maçãs','Uvas','Bananas','Abacaxi','Morangos', 'Laranjas']
```

Para adicionar um elemento no início do array podemos usar o `unshift()`.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.unshift('Laranjas');
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]
```

Em ambos os métodos, para adicionar objeto em Array JavaScript, devemos **passar como parâmetro** o elemento que queremos adicionar.

## Remover um elemento do Array JavaScript

Para remover um elemento do início de um array podemos usar o `shift()`.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']
```

Para remover um elemento do final de um array podemos usar o `pop()`.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.pop();
// ['Maçãs','Uvas','Bananas','Abacaxi']
```

Em ambos os métodos, não é preciso passar o elemento como parâmetro.

Podemos também remover um item a partir de seu índice com o método `splice()`.

```
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
var pos = listaDeFrutas.indexOf('Abacaxi'); //pos = 3
listaDeFrutas.splice(pos, 1)
// ['Maçãs','Uvas','Bananas','Morangos']
```

No método `splice()` o primeiro parâmetro deve ser a posição a partir da qual queremos remover os elementos, e o segundo parâmetro é a quantidade que queremos remover.

### Conclusão

Vimos o que são arrays, que servem para **armazenar, agrupar** e **organizar dados na memória do computador e que eles** não possuem tamanho nem tipo fixos e, **devido a isso, podemos acrescentar, remover e trocar os elementos de posição livremente. Vimos também que em Javascript a forma mais comum de declarar um array é usando o método de array literals**, que é uma sequência de elementos separados por vírgulas e entre colchetes. Por fim, conhecemos alguns métodos de array usados por desenvolvedores e desenvolvedoras ao lidar com arrays em programação.

- ### [Artigo de Akemi Alice para a ALURA](https://www.alura.com.br/artigos/http)

### [Menu Criando e Estruturando sua Primeira API com GET e Banco de Dados](menu.md)