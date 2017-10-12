# angularjs-starter
Um skeleton para aplicações SPA com AngularJS e Angular Material.

## Características

### v1.0
* É possível baixar bibliotecas e registrá-las no arquivo `config/dependencies.js`. Assim a tarefa `gulp install` irá instalar as dependências no diretório `public` e importar os documentos do arquivo principal. A ordem que os arquivos são adicionados na dependência importa, pois os arquivos serão importados na mesma ordem.

* Caso queira limpar o diretório público, retirando as bibliotecas e retirando as importações do arquivo HTML principal, execute a tarefa `gulp uninstall`.

### v1.1
* Possui um `Dockerfile` e um `docker-compose.yml` para um servidor com containers. Basta executar `$ sudo docker-compose up` para construir o container com a aplicação. Ele também cria um volume para sincronizar as modificações durante o desenvolvimento. Agradecimento a @jhorlima pela ideia.

## Como usar

Baixe ou clone o projeto. Pelo terminal, baixe as depêndencias do projeto com o seguinte comando:
```
$ npm install
```

Caso não tenha `Gulp` instalado, instale-o com o comando:
```
$ sudo npm install gulp-cli -g
```

Execute o seguinte comando para copiar os scripts e estilos cadastrados em `config/dependencies.js` do diretório `node_modules` para o diretório público. Ele também importa os scripts para o arquivo principal da aplicação:
```
$ gulp install
```

Pronto! O projeto está configurado, pronto para que você crie suas aplicações com AngularJS. Para iniciar o servidor, execute o comando:
```
npm start
```

* Caso você instale novas dependências, execute o comando `gulp uninstall` e logo após o comando `gulp install`. Ele copiará os arquivos para a lib do projeto e importará no arquivo principal.

* O servidor está configurado para o modo HTML5. Portanto, é necessário habilitar o modo HTML5 no AngularJS. Caso contrário, modifique o arquivo `config/express.js` e retire a tag `base` do arquivo `index.html` para trabalhar normalmente sem o modo HTML5.

## Docs
A propriedade `options` do arquivo `config/dependencies.js` possui as seguintes propriedades:

Propriedade   | Descrição
------------- | -------------
basePublic    | Caminho para o diretório público, que será exposto pelo servidor.
destCssFolder | O diretório, relativo ao diretório público, onde ficarão os arquivos de estilos.
destJsFolder  | O diretório, relativo ao diretório público, onde ficarão os arquivos javascript.
mainIndex     | O arquivo principal da aplicação, que será a base para o AngularJS. Geralmente chamado de `index.html`.