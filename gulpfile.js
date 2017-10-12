var gulp          = require('gulp');
var del           = require('del');
var inject        = require('gulp-inject-string');
var stripLine     = require('gulp-strip-line');
var emptyLine     = require('gulp-remove-empty-lines');
var dependencies  = require('./config/dependencies');
var rename        = require('gulp-rename');

gulp.task('install', function() {
    // Copia as bibliotecas para o destino
    //
    dependencies.css.forEach(function(dependency) {
        gulp.src(dependency)
            .pipe(gulp.dest(dependencies.options.basePublic + dependencies.options.destCssFolder));
    });
    dependencies.js.forEach(function(dependency) {
        gulp.src(dependency)
            .pipe(gulp.dest(dependencies.options.basePublic + dependencies.options.destJsFolder));  
    });

    // Adiciona as dependências do css ao arquivo principal do projeto
    //
    var listCssDependencies = getListCssDependencies();
    var listJsDependencies  = getListJsDependencies();
    gulp.src(dependencies.options.mainIndex)
        .pipe(inject.after('<!--libCss-->', listCssDependencies))
        .pipe(inject.after('<!--libJs-->', listJsDependencies))
        .pipe(gulp.dest(dependencies.options.basePublic));
});

// Limpa os diretórios onde ficam as libs principais e retira as tags que mencionam as bibliotecas
//
gulp.task('uninstall', function() {
    gulp.src(dependencies.options.mainIndex)
        .pipe(stripLine(['<script', '<link rel="stylesheet"']))
        .pipe(emptyLine({removeComments: false}))
        .pipe(gulp.dest(dependencies.options.basePublic));

    return del([
        'public/lib/css/**/*',
        'public/lib/js/**/*',
    ]);
});

/**
 * Obtém a lista de dependências do css, e gera uma string que será adicionada
 * ao arquivo principal.
*/
function getListCssDependencies() {
    return dependencies.css.filter(function(dependency){ return dependency.endsWith('.css')})
    .map(function(dependency) {
        let dependencyArray = dependency.split('/');
        let library         = dependencyArray[dependencyArray.length - 1];
        return `\n\t<link rel="stylesheet" href="${dependencies.options.destCssFolder}${library}"/>`;
    })
    .reduce(function(total, linkDependency) {
        return total + linkDependency
    }, "");
}

/**
 * Obtém a lista de dependências do js, e gera uma string que será adicionada
 * ao arquivo principal.
*/
function getListJsDependencies() {
    return dependencies.js.filter(function(dependency){ return dependency.endsWith('.js')})
    .map(function(dependency) {
        let dependencyArray = dependency.split('/');
        let library         = dependencyArray[dependencyArray.length - 1];
        return `\n\t<script src="${dependencies.options.destJsFolder}${library}"></script>`;
    })
    .reduce(function(total, linkDependency) {
        return total + linkDependency
    }, "");
}