angular.module('SwingBand', ['ngRoute', 'RouteControllers']);
 
angular.module('SwingBand').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/ourmusic', {
        templateUrl: 'templates/OurMusic.html',
        controller: 'HomeController'
    })
    .when('/aboutus', {
        templateUrl: 'templates/AboutUs.html',
        controller: 'HomeController'
    })
    .when('/bookings', {
        templateUrl: 'templates/Bookings.html',
        controller: 'HomeController'
    })
});