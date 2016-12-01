<<<<<<< HEAD
angular.module('tunely', []).controller('AlbumsIndexController', AlbumsIndexController);

function AlbumsIndexController(){
  var vm = this;
  vm.newAlbum = {};

  vm.newAlbum = {
    name: 'License to Ill',
    artistName: 'Beastie Boys'
  };

  vm.albums = [
  {
    name: 'Coming Home',
    artistName: 'Leon Bridges'
  },
  {
    name: 'Are We There',
    artistName: 'Sharon Van Etten'
  },
  {
    name: 'The Queen is Dead',
    artistName: 'The Smiths'
  }
];
=======
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
config.$inject = ['$routeProvider', '$locationProvider'];

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
>>>>>>> 3fb4bc4e7e18c5e24c3c8368a0660fb9e0c56b05
}
