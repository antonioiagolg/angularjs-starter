var gulp = require('gulp');
gulp.task('copy', function() {
    gulp.src(['./node_modules/angular-animate/angular-animate.min.js', './node_modules/angular-animate/angular-animate.min.js.map'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular/angular.min.js', './node_modules/angular/angular.min.js.map'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular-aria/angular-aria.min.js', './node_modules/angular-aria/angular-aria.min.js.map'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular-messages/angular-messages.min.js', './node_modules/angular-messages/angular-messages.min.js.map'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular-route/angular-route.min.js', './node_modules/angular-route/angular-route.min.js.map'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular-material/angular-material.min.js'])
    .pipe(gulp.dest('./public/js/'));
    gulp.src(['./node_modules/angular-material-icons/angular-material-icons.min.js'])
    .pipe(gulp.dest('./public/js/'));

    gulp.src(['./node_modules/angular-material/angular-material.min.css'])
    .pipe(gulp.dest('./public/css/'));

    gulp.src(['./node_modules/angular-material/angular-material.min.css'])
    .pipe(gulp.dest('./public/css/'));
    gulp.src(['./node_modules/angular-material-icons/angular-material-icons.min.css'])
    .pipe(gulp.dest('./public/css/'));
});