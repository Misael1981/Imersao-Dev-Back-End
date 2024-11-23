# O que são regras de negócio?

<img src="img/regras-negocio-01.webp">

## Introdução

Hoje vamos conversar sobre um termo que aparece muitas vezes quando se discute produtos de software: “quando você está criando uma classe, tem que pensar nas regras de negócio”, “ao planejar testes, sempre temos que pensar nas regras de negócio”, “como estruturar um projeto? Vai depender das regras de negócio” e por aí vai.

As tais “regras de negócio” parecem muito importantes no desenvolvimento de software, mas nem sempre os conteúdos voltados a programação param para explicar este mistério: **o que são, afinal, as regras de negócio e como elas se relacionam com o código?**

Neste artigo vamos abordar as regras de negócio na visão do desenvolvimento de software, sem detalhar as partes que envolvem as pessoas de produto e stakeholders na criação destas regras. Lembrando sempre que a construção de um produto envolve diversas competências e que o código em si é uma parte disso!

## Por que é importante que devs entendam as regras de negócio

O trabalho de desenvolvimento de software está ligado a, claro, escrever código. Mas o mais importante não é apenas saber **como** escrever, mas também **o que** escrever e **por que** escrever. É aí que entra a importância de se conhecer o produto ou serviço: o que faz, qual problema visa resolver e para quem.

Por exemplo, um time de desenvolvimento de um serviço voltado para a indústria alimentícia pode se envolver com diversos aspectos que vão além do código, em assuntos como legislação sanitária para transporte de perecíveis, tributação de alimentos e por aí vai. É possível pensar em listas enormes de especificidades para cada app que você tem instalado no seu celular!

Ou seja, é imprescindível que devs conheçam e se envolvam com o produto, e isso passa pelas regras de negócio.

## Definindo “regra de negócio”

Antes de discutirmos os “comos” e “porques”, vamos definir o que é uma regra de negócio.

Podemos listar algumas definições sucintas sobre o que é uma regra:

```
"São uma categoria de requisitos do sistema que representam decisões sobre como executar o negócio." (Fonte: DALLAVALLE, Silvia Inês; CAZARINI, Edson Walmir. Regras do Negócio, um fator chave de sucesso no processo de desenvolvimento de Sistemas de Informação. Anais do XX ENEGEP-Encontro Nacional de Engenharia de Produção. São Paulo, 2000.)
```

Ou:

```
Uma diretiva clara e direta que define uma atividade específica de um determinado negócio.
```

Também:

```
Uma regra de negócio descreve um aspecto do negócio, definindo ou restringindo tanto sua estrutura quanto seu comportamento.
```

Ou ainda:

```
Uma regra define uma diretriz para cada contexto específico de um negócio, sobre qual deve ser o resultado esperado para cada ação ou decisão.
```

## Vamos destrinchar melhor essas definições!

A regra de negócio traduz uma necessidade do negócio - como validações, restrições e etc - em regras lógicas, permitindo que desenvolvimento, produto e negócio de uma empresa se alinhem com relação a estas necessidades, se guiem por elas e apliquem as regras da forma mais clara possível, fazendo com que o desenvolvimento e o crescimento do produto possam fluir da melhor forma.

As regras ajudam empresas a expressarem os objetivos, determinações, limitações e procedimentos de seus produtos de forma clara, tanto para quem trabalha no desenvolvimento do produto quanto para quem o utiliza. É comum o foco em partes do negócio que precisam de regras claras, como por exemplo, controle de acesso, cálculos e valores e políticas internas do produto, especialmente quando há legislação envolvida - como um cálculo de valor de imposto sobre um produto.

Uma regra, por definição, deve ser sucinta, direta e compreensível, lidando apenas com um aspecto ou atividade do negócio e **definindo procedimentos** para cada um destes aspectos ou atividades. Por exemplo, da mesma forma que podemos pensar um programa como uma série de decisões feitas através de código, a atividade de um negócio também pode ser pensada da mesma forma:

- Um usuário poderá finalizar um cadastro com sucesso **somente** se todos os dados solicitados nos campos do cadastro forem inseridos com sucesso e validados.

### Na afirmação acima é possível identificar dois pontos:

1. **Uma condição**: se os dados forem validados com sucesso (ou seja, uma das situações possíveis);
2. **Uma ação**: o cadastro é finalizado com sucesso (a ação que deverá ser tomada a partir da situação).

Neste ponto você já pode estar se perguntando: “sim, mas o que acontece se os dados não forem validados?”. Com razão! Mapear todas as situações possíveis e como responder a elas também faz parte do processo.

Ou seja, mesmo uma situação aparentemente simples, como um cadastro de usuário, pode resultar em múltiplas regras de negócio, uma para cada fator que pode influenciar o resultado final da ação:

- O endereço foi validado?
- O produto tem alguma restrição de endereço (por exemplo, limite de área de entrega)?
- O cadastro envolve dados de cartão de crédito?
- O número do cartão será validado por algoritmo próprio antes do envio do formulário?

Entre outros fatores. Em algumas áreas, como a bancária, as regras podem ser ainda mais complexas, devido a dispositivos legais e governamentais que devem ser contemplados; assim, vários produtos devem ter regras externas em combinação com as internas.

Podemos dar um outro exemplo de como condição e ação podem se aplicar a regras diferentes, como em um sistema de compras de uma empresa:

- **Caso 1**:

    - **Condição**: O valor total do pedido de compra é de R$200 ou menos.
    - **Ação**: É necessária a aprovação da liderança da área.

- **Caso 2**: O valor total do pedido de compra ultrapassa R$200.

    - **Condição**: É necessária a aprovação da liderança da área e também da gerência do departamento de contas a pagar.

Além das regras de negócio, em desenvolvimento também lidamos com **requisitos**. Mas qual é a diferença entre esses dois conceitos?

## Regras e requisitos

As regras de negócio e os requisitos de um projeto ou de uma funcionalidade costumam estar ligados, porém têm funções diferentes no fluxo de desenvolvimento de um produto:

- As regras de negócio “traduzem” um contexto do negócio para que este contexto (e suas necessidades) seja compreendido e aplicado no produto ou serviço; elas descrevem como se espera que o produto se comporte: condições, restrições, gatilhos, etc. Podem ser definidas por stakeholders em conjunto com pessoas de produto (como PMs) e com lideranças técnicas;
- Já os requisitos são o conjunto de “partes funcionais” que documentam o que o sistema deve fazer: quais as necessidades que deverão ser atendidas. Podem ser definidos pela liderança técnica em conjunto com o time de desenvolvimento e incluir detalhamento técnico, DoD (definition of done), DoR (definition of ready) e critérios de aceitação.

### Por exemplo:

- **Regra**: O usuário somente deve conseguir completar o cadastro se tiver fornecido um número de cartão de crédito válido (condição: “somente”, “se”, etc)
- **Requisito**: Validar o número de cartão de crédito em todas as operações de criação de usuário (ação objetiva do que o sistema deve fazer)

```
Engenharia a análise de requisitos são temas muito importantes no desenvolvimento de um produto. Quer saber mais? Confira este curso e em seguida esta continuação, que falam especificamente sobre engenharia de requisitos. Ambos fazem parte da formação de modelagem e melhorias de processos de negócios.

Lembrando que cada empresa, produto e time pode trabalhar com as definições acima de forma diferente, ou mesmo não utilizar nenhuma delas.
```

Já conversamos sobre como é importante que o time dev conheça a fundo o produto, inclusive quem o utiliza, fazer visitas técnicas e acompanhar o uso (se aplicável) e como o negócio funciona. Além disso, é preciso frisar a importância da comunicação clara e da gestão do conhecimento sobre o negócio dentro do time, para que todas as informações fiquem acessíveis.

### Mas regras de negócio são realmente necessárias?

## Por que usamos regras

O uso de regras de negócio traz uma gama de benefícios ao negócio e ao produto:

- **Eficiência no fluxo de trabalho**: As regras visam aumentar a eficiência na linha de comunicação que vai de stakeholders ao desenvolvimento. A comunicação é uma das chaves para um desenvolvimento mais eficiente, e as regras são um método para que haja maior clareza na transmissão de informações sobre o que o produto deve ou não deve fazer. A longo prazo, temos economia de tempo e recursos.

- **Consistência**: As regras ajudam a garantir que uma tarefa de desenvolvimento seja executada e entregue de acordo com critérios específicos, o que é especialmente importante caso o produto envolva compliance com relação a alguma regra externa, por exemplo leis ou regulamentações.

- **Entendimento dos processos**: As regras de negócio também funcionam como documentação do negócio e também para dar visibilidade aos processos internos e externos. Isso também fortalece a cultura organizacional da empresa, fazendo com que as pessoas envolvidas conheçam e se envolvam cada vez mais com o produto.

## Tipos de regras

Embora não seja uma classificação obrigatória, podemos identificar alguns tipos de regras. Porém, independente de usarmos ou não alguma classificação, as regras de negócio costumam pegar emprestados os chamados **operadores lógicos** da programação para que sejam construídas da forma mais clara possível:

- `if/then`: Se determinada condição for verdadeira, então será tomada determinada ação. Caso de uso: “Se um usuário tem saldo na conta acima de X, a opção de empréstimo estará liberada”;

- `if/else`: Se determinada condição for verdadeira, o resultado será X; senão, o resultado será Y. Caso de uso: “Se o CEP do usuário for 35XXX-XX o frete é gratuito; em qualquer outro caso, fazer o cálculo do frete”;

- `only if`: Apenas se determinada condição for verdadeira, será tomada determinada ação. Caso de uso: “Apenas usuários cadastrados como gerentes poderão acessar a área de admin do sistema”;

- `when`: Quando determinada condição ocorrer, um evento será disparado. Caso de uso: “Quando o mouse se deslocar para fora da área da janela, exibir o modal com o código de promoção para primeira compra”.

### Além da sintaxe, ainda é possível separar as regras de acordo com o comportamento:

- **Constraint (limitação ou restrição)**: São regras que, como o nome indica, restringem ou limitam ações. Por exemplo, “usuários com livros em atraso não podem emprestar novos livros na biblioteca”.

- **Derivation (ou inferência)**: Regras definidas a partir de outras informações, adquiridas através de condições if/else ou outros dados.

Assim, as regras fornecem informação crucial sobre como um determinado processo ocorre no sistema, quando isso deve ocorrer, de que forma ele pode sofrer alterações e sob quais condições ele deve ou pode ser interrompido.

As regras também podem ser definidas de acordo com seus casos de uso, ou se são restrições externas ou internas. Alguns casos comuns:

- **Compliance**: Alguns tipos de negócios, como produtos financeiros e assistência médica, podem envolver aspectos legais ou agências regulatórias. Nesses casos, é imprescindível que existam regras para garantir que o produto atue de acordo com estas restrições. Por exemplo, um serviço bancário pode ser legalmente obrigado a informar determinada agência regulatória sobre qualquer transação acima de um valor X.

- **Aprovação**: Serviços financeiros e seguradoras, por exemplo, normalmente têm regras para aprovação de créditos ou seguros, baseados em determinados critérios (como o score de crédito), e isso deve ser contemplado nas regras.

- **Assinatura**: O serviço depende da contratação de uma assinatura, como serviços de streaming? Então deve haver um conjunto de regras que defina o acesso ao produto de acordo com o status da assinatura. Está paga? Está pendente? Após quantos dias do vencimento o usuário ainda pode acessar o serviço? O usuário receberá um aviso de débito pendente após quanto tempo do vencimento? A assinatura será renovada automaticamente? Como o usuário será informado sobre isso?

- **Compras e devoluções**: Regras muito comuns em serviços que envolvam compras de produtos, pois devem envolver tanto regras internas (por exemplo, política de devoluções) quanto externas (por exemplo, compliance com as leis do consumidor vigentes).

- **Cadeia de decisões**: Muito comum em sistemas de compras e estoques internos de empresas, esse tipo de regra condiciona ações, como a emissão de um pedido de compra, a outros processos, como uma autorização de usuário com privilégios específicos.

- **Cálculos**: Regras que envolvem cálculos englobam todo um universo de especificidades: comissões, bônus, descontos, cupons e abatimentos.

```
Como muitas coisas que envolvem gerenciamento de times ágeis, nenhuma regra é escrita em pedra e os times podem ou não fazer distinções entre os tipos de regra ou utilizar outros tipos de classificação. O processo que vai da definição de uma regra até sua aplicação em um código também vai variar de empresa para empresa e produto para produto.
```

Algumas empresas fazem o processo chamado de **refinamento**, onde uma regra pode se transformar em um ou mais cards de tarefas; o processo de definir a regra pode ou não envolver a criação de uma ou mais histórias de usuário.

Agora que já passamos por vários conceitos, como afinal são escritas as regras?

## Como as regras são escritas

Como já sabemos, o processo de definição e escrita de uma regra pode ser feito de várias maneiras; uma planilha no Google Docs, um documento no Notion, através de cards em gerenciadores como o Trello ou mesmo usando plataformas específicas; várias empresas adotam diferentes ferramentas para documentar suas regras, de acordo com suas necessidades.

### A plataforma pode variar, porém algumas características são sempre as mesmas:

- Ter somente uma função (fazer somente uma coisa);
- Ser completa (ter início, meio e fim definidos de forma explícita);
- Ser inteligível, sucinta e clara para todas as pessoas envolvidas;
- Especificar claramente qualquer regra de compliance que seja aplicável;
- Estar sempre atualizada.

## Colocando uma regra no papel

Vamos pensar em um exemplo comum: uma solicitação de empréstimo. Partindo de uma história de usuário:

```
“Eu, como correntista do banco X, gostaria de ter acesso a serviços de empréstimo vinculados ao próprio banco, com um limite compatível ao meu rendimento.”
```

Após algumas discussões, as pessoas envolvidas neste passo do processo (stakeholders, pessoas de produto, liderança técnica, devs do time) chegam ao seguinte cenário:

```
O banco poderá fornecer empréstimos a correntistas que solicitarem, caso tenham seus cadastros aprovados.
```

Você se lembra do que conversamos anteriormente, que as regras de negócio costumam pegar emprestado da programação alguns operadores lógicos e condicionais? Então podemos usar esses operadores para esclarecer um pouco mais este caso:

```
SE a/o correntista fizer uma solicitação de empréstimo E tiver 18 anos ou mais E não tiver restrições junto aos serviços de proteção ao crédito, ENTÃO o acesso ao empréstimo será liberado. SENÃO, a razão da recusa deve ser especificada.
```


Como você já pode ter percebido, usamos if, then e else para criar o fluxo que define a regra.

A partir daqui, desenvolve-se mais a regra, até que se contemple todos os casos, tanto de “caminho feliz” (sucesso na solicitação), quanto os de “caminho triste” (falha na solicitação).

## Como documentar?

Como já mencionamos anteriormente, há várias formas de se documentar as regras. Um exemplo de regra documentada em formato de tabela:

|**item:**	|**Descrição:**|
|-----|------|
|nome:|	Nome explicativo|
|Identificador:|	Identifique sua regra com um identificador único como RN54 ou RN54.1|
|Descrição:|	Descrição detalhada da regra|
|Evento/gatilho:|	Descrição do evento ou gatilho que ativa a regra (envio de formulário, por exemplo)|
|Exemplo:|	Um exemplo de caso de uso|
|Pseudo-codigo:|	Caso seja necessário, pode-se utilizar pseudo-código ou fluxogramas para explicar a regra|
|Documentação:|	Issue no GitHub que gerou a regra, legislações ou qualquer outra documentação relevante|
|Regras relacionadas:|	Caso existam regras que se relacionem a esta, listar os identificadores e nomes|
|Responsável:|	Identificar a pessoa responsável pelo mapeamento e definição da regra|

Analisando as informações da tabela, podemos definir alguns pontos importantes na hora de documentar:

- Utilize os identificadores para relacionar e fazer referência a regras em outras regras, fluxogramas e outras documentações. Desdobramentos de regras podem seguir o modelo RN1, RN1.1, RN1.2, etc.
- Defina a regra utilizando o modelo sujeito -> verbo -> objeto.
- Atenção para a linguagem: evite ambiguidades e dupla negação (“o usuário não pode não ser autorizado”, etc).
- Para a descrição detalhada também são comumente utilizados diagramas, fluxogramas ou UMLs. Também é possível utilizar ferramentas específicas para automatização e gerenciamento de regras de negócio.

Imaginando uma regra para nosso exemplo, a tabela poderia ser preenchida da seguinte forma:

|**item:**	|**Descrição:**|
|-----|------|
|nome:|	Usuários registrados como “gerente” podem aprovar crédito|
|Identificador:|	RN13|
|Descrição:|	Apenas users com role "gerente" no sistema tem privilégios para aprovar, recusar e modificar valores de crédito consignado disponível para correntistas, de acordo com o rendimento.|
|Evento/gatilho:	|
|Exemplo:|	Bilbo Baggins, "gerente" de uma agência do Banco Condado, pode acessar os dados de correntistas do banco e aprovar ou recusar limite de crédito para correntistas da agência, mediante solicitação.|
|Pseudo-codigo:|	SE user.role === "gerente" ENTÃO inputValorCreditoDisponivel === "ativo" //etc|
|Documentação:|	Issue #33 (link para a issue no repositório)|
|Regras relacionadas|:	RN23 Cálculo para valor máximo de empréstimo permitido|
|Responsável:|	`gandalf.cinzento@bancocondado.com.br`|

### Exemplo

Agora que já temos uma ideia de como documentar regras, seguem duas regras de exemplo para produtos bancários. Como você organizaria estas regras conforme as especificações acima?

- **Para conceder um empréstimo para compra de veículo**: “Deve ser correntista há 12 meses ou mais, não deve ter ocorrência de saldo negativo nos últimos 6 meses, não deve constar nenhuma restrição do CPF junto aos sistemas de proteção ao crédito, deve ser maior de 21 anos, deve ter comprovação de renda de no mínimo R$5.000, o valor do empréstimo não deve ultrapassar R$35.000”.

- **Para transferências de valores**: “Efetuar automaticamente transferências que sejam feitas entre 7:00 e 20:00; transferências efetuadas entre 22:00 e 7:00 têm um limite de R$100 cada, com restrição de no máximo 3 transferências de até R$100 por conta.”

Estes são exemplos mais sucintos! Um produto em produção normalmente vai ter muito mais regras envolvidas, com maior complexidade. Por isso é importante a documentação correta.

Quando um negócio cresce e a complexidade do produto aumenta, o processo de criação de regras também pode ficar mais complexo, pois elas podem começar a se “cruzar” entre elas. Existem algumas ferramentas que ajudam os times responsáveis a lidar com o gerenciamento de regras.

## Motores de regras

À medida em que negócios e produtos crescem, o gerenciamento de todas as regras pode se tornar mais complexo. Por esse motivo, existem softwares voltados para a automação e o gerenciamento de regras, como softwares de CRM (customer relationship management ou gestão de relacionamento com cliente) e motores de regras de negócio.

Um motor de regra pode ser uma solução que automatize algum processo usual de regras de negócio, como validações, consultas de dados (por exemplo as análises de crédito que vimos nas regras de exemplo) e processamentos de compliance específicos. Estas ferramentas também podem fazer a documentação e a gestão de todo o conjunto das regras de um negócio.

Os chamados BRMSs (business rules management systems ou sistemas de gerenciamento de regras de negócio), além disso, permitem a automatização de regras e a criação de um sistema lógico de tomada de decisão para os processos e para todo o negócio; isso permite que partes não-técnicas do time de desenvolvimento tenham autonomia para desenvolver e testar regras usando lógica similar à da programação, de forma mais eficiente do que apenas traduzindo em texto.

Caso você tenha interesse em saber mais sobre o assunto, este artigo da IBM (em inglês) detalha bastante o funcionamento de um BRMS.

## Conclusão

Neste artigo abordamos um panorama sobre o que são regras de negócio, por que são importantes e alguns exemplos de como podem ser utilizadas no dia a dia.

Como tudo que é relacionado a times ágeis e desenvolvimento moderno de produtos de software, o funcionamento dos processos pode variar muito, incluindo a forma como as regras são desenvolvidas e documentadas e quais partes do time se envolvem em cada etapa.

Você pode aproveitar para exercitar a análise e pensar como seriam as regras de negócio para diversos produtos e serviços que você utiliza no seu cotidiano de dev.

- ### [Artigo de Juliana Amoasei para a ALURA](https://www.alura.com.br/artigos/o-que-sao-regras-de-negocio)

### [Menu Armazenamento e Upload de Imagens](menu.md)