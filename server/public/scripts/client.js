console.log('does this work');

var myApp = angular.module('MyApp', ['ngRoute']);



myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {

        templateUrl: 'views/home.html',


    }).when('/messages', {
        templateUrl: '/views/messages.html',
        controller: 'MessagesController as vm'

        //conversion example
    })
}])