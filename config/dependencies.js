module.exports = {
    options: {
        basePublic: './public/',
        destCssFolder: 'lib/css/',
        destJsFolder: 'lib/js/',
        mainIndex: './public/index.html'
    },
    css: [
        './node_modules/angular-material/angular-material.min.css',
        './node_modules/angular-material-icons/angular-material-icons.css'
    ],
    js: [
        './node_modules/angular/angular.min.js',
        './node_modules/angular/angular.min.js.map',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/angular-route/angular-route.min.js.map',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-animate/angular-animate.min.js.map',
        './node_modules/angular-aria/angular-aria.min.js',
        './node_modules/angular-aria/angular-aria.min.js.map',
        './node_modules/angular-messages/angular-messages.min.js',
        './node_modules/angular-messages/angular-messages.min.js.map',
        './node_modules/angular-material/angular-material.min.js',
        './node_modules/angular-material-icons/angular-material-icons.min.js'
    ]
}