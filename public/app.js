angular.module('app', ['ngMaterial', 'ngRoute'])
.config(function($locationProvider, $routeProvider){
    // Definindo o módulo html5
    //
    $locationProvider.html5Mode(true);

    // Definindo a rota principal
    //
    $routeProvider.when('/', {
        templateUrl: 'main/main.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});