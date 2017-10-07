var gulp         = require('gulp');
var del          = require('del');
var dependencies = require('./config/dependencies');

gulp.task('copy', function() {
    dependencies.css.forEach(function(dependency) {
        gulp.src(dependency).pipe(gulp.dest('./public/css'));
    });

    dependencies.js.forEach(function(dependency) {
        gulp.src(dependency).pipe(gulp.dest('./public/js'));
    });
});

// Limpa os diretórios onde ficam as libs principais, caso queira incrementar o seu gulpfile.
//
gulp.task('clean', function() {
    return del([
        'public/css/**/*',
        'public/js/**/*',
    ]);
});