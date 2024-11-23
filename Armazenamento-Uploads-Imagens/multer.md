# O que é e o que faz o Multer no JavaScript?

**Multer** é um middleware Node.js especializado em m**anipular dados do tipo multipart/form-data**. Em termos mais simples, ele é uma ferramenta ideal para **fazer upload de arquivos** em aplicações Node.js que utilizam o framework Express.

## Como funciona:

- **Intercepta requisições**: Quando uma requisição contendo um formulário multipart/form-data chega ao seu servidor, o Multer a intercepta. Esse tipo de formulário é comumente usado para enviar arquivos de um navegador para um servidor.
- **Extrai os arquivos**: O Multer extrai os arquivos enviados pelo formulário, como imagens, PDFs, documentos, etc.
- **Processar os arquivos**: Ele permite que você configure como esses arquivos serão processados:
    - **Onde salvar**: Você pode definir um diretório específico para armazenar os arquivos enviados.
    - **Renomear**: É possível renomear os arquivos para evitar conflitos ou seguir um padrão específico.
    - **Validar**: O Multer permite que você implemente validações para verificar o tipo de arquivo, tamanho máximo permitido, etc.
- **Integração com Express**: O Multer se integra perfeitamente ao framework Express, facilitando a criação de rotas para lidar com uploads de arquivos.

## Por que usar o Multer?

- **Facilidade de uso**: A configuração do Multer é relativamente simples, mesmo para quem está começando com Node.js.
- **Flexibilidade**: Oferece diversas opções de configuração para atender a diferentes necessidades.
- **Eficiência**: É construído sobre o busboy, um módulo Node.js altamente eficiente para lidar com dados multipart/form-data.
- **Comunidade**: Possui uma comunidade ativa e documentação completa, o que facilita a resolução de problemas e o aprendizado.

### Exemplo básico:

```
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('myFile'), 1  (req, res) => {
  console.log(req.file);
  res.send('Arquivo enviado com sucesso!');
});
```

## Neste exemplo:

- **upload.single('myFile')**: Configure o Multer para lidar com um único arquivo com o nome "myFile" no formulário.
- **dest: 'uploads/'** : Define o diretório "uploads/" como destino para salvar o arquivo.

## Em resumo:

O Multer é uma ferramenta essencial para qualquer desenvolvedor Node.js que precisa implementar funcionalidades de upload de arquivos em suas aplicações. Ele simplificou significativamente o processo, oferecendo uma interface intuitiva e personalizável.

- ### [Documentação](https://www.npmjs.com/package/multer)

### [Menu Armazenamento e Upload de Imagens](menu.md)