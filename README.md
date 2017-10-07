# angularjs-starter
Um skeleton para aplicações SPA com AngularJS e Angular Material.

## Características
* É possível baixar bibliotecas e registrá-las no arquivo `config/dependencies.js`. Assim a tarefa `gulp copy` irá instalar as dependências no diretório `public`.

* Caso queira limpar o diretório público, retirando as bibliotecas, execute a tarefa `gulp clean`.

## Como usar

Baixe ou clone o projeto. Pelo terminal, baixe as depêndencias do projeto com o seguinte comando:
```
$ npm install
```

Caso não tenha `Gulp` instalado, instale-o com o comando:
```
$ sudo npm install gulp-cli -g
```

Execute o seguinte comando para copiar os scripts e estilos cadastrados em `config/dependencies.js` do diretório `node_modules` para o diretório público:
```
$ gulp copy
```

Pronto! O projeto está configurado, pronto para que você crie suas aplicações com AngularJS. Para iniciar o servidor, execute o comando:
```
npm start
```

* Caso novas você instale novas dependências, não esqueça de importá-las no arquivo `index.html`.

* O servidor está configurado para o modo HTML5. Portanto, é necessário habilitar o modo HTML5 no AngularJS. Caso contrário, modifique o arquivo `config/express.js` e retire a tag `base` do arquivo `index.html` para trabalhar normalmente sem o modo HTML5.