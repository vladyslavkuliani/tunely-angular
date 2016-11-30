/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
    .module('tunely', ['ngRoute'])
    .config(config)
    .controller('AlbumsIndexController', AlbumsIndexController);

config.$inject = ['routeProvider', 'locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            template: '../views/templates/albums',
            controllerAs: 'albumsIndexCtrl',
            controller: 'AlbumsIndexController'
        })
        .when('/albums/:id', {
            template: 'This template will show an album!',
            controllerAs: 'albumsShowCtrl',
            controller: 'AlbumsShowController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController($http) {
    var vm = this;
    vm.newAlbum = {};
    vm.arr = [1,2,3];

    $http({
        method: 'GET',
        url: '/api/albums'
    }).then(function successCallback(response) {
        vm.albums = response.data;
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    vm.createAlbum = function() {
        $http({
            method: 'POST',
            url: '/api/albums',
            data: vm.newAlbum,
        }).then(function successCallback(response) {
            vm.albums.push(response.data);
        }, function errorCallback(response) {
            console.log('There was an error posting the data', response);
        });
    }

    vm.deleteAlbum = function(album) {
        //console.log(album);
        $http({
            method: 'DELETE',
            url: '/api/albums/' + album._id
        }).then(deleteSuccess, error);
    }

    function error(err) {
        console.log(err);
    }

    function deleteSuccess(response) {
        var deletedAlbum = vm.albums.find(function(album) {
            return album._id === response.data._id;
        });
        var index = vm.albums.indexOf(deletedAlbum);
        console.log(index);
        vm.albums.splice(index, 1);
    }

    vm.editAlbum = function(album) {
        $http({
            method: 'PUT',
            url: '/api/albums/' + album._id,
            data: album
        }).then(updateSuccess, error);
    }

    function updateSuccess(response) {
        console.log(response.data);
        var updatedAlbum = vm.albums.find(function(album) {
            return album._id === response.data._id;
        });
        var index = vm.albums.indexOf(updatedAlbum);
        vm.albums[index] = updatedAlbum;

        vm.editAlbum = function(album) {
            $http({
                method: 'PUT',
                url: '/api/albums/' + album._id,
                data: album
            }).then(function successCallback(json) {
                // don't need to do anything!
            }, function errorCallback(response) {
                console.log('There was an error editing the data', response);
            });
        }

        vm.deleteAlbum = function(album) {
            $http({
                method: 'DELETE',
                url: '/api/albums/' + album._id
            }).then(function successCallback(json) {
                var index = vm.albums.indexOf(album);
                vm.albums.splice(index, 1)
            }, function errorCallback(response) {
                console.log('There was an error deleting the data', response);
            });
        }

    }
  }
