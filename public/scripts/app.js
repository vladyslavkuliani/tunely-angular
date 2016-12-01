/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
    .module('tunely', ['ngRoute'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

<<<<<<< HEAD
function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/albums',
            controllerAs: 'albumsIndexCtrl',
            controller: 'AlbumsIndexController'
        })
        .when('/albums/:id', {
            templateUrl: '/templates/albums-show',
            controllerAs: 'albumsShowCtrl',
            controller: 'AlbumsShowController'
        });
=======
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controllerAs: 'albumsIndexCtrl',
      controller: 'AlbumsIndexController'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/albums-show',
      controllerAs: 'albumsShowCtrl',
      controller: 'AlbumsShowController'
    })
>>>>>>> 84c4816c2623a4297512b6d3918939204192f204

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
