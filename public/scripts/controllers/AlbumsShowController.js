<<<<<<< HEAD
angular.module('tunely').controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
  function AlbumsShowController (  $http,   $routeParams  ) {
    var vm = this;
    console.log($routeParams);

    $http({
      method: 'GET',
      url: '/api/albums/' + $routeParams.id// how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
      vm.album = json.data;
    });
  }
=======
angular
    .module('tunely')
    .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController($http, $routeParams) {
    var vm = this;
    vm.newSong = {};

    $http({
        method: 'GET',
        url: '/api/albums/' + $routeParams.id
    }).then(function successCallback(json) {
        vm.album = json.data;
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

    vm.editSong = function(song) {
        $http({
            method: 'PUT',
            url: '/api/albums/' + $routeParams.id + '/songs/' + song._id,
            data: song
        }).then(function updateSuccess(json) {
            console.log(json.data);
            vm.song = json.data;
        }, function updateError(response) {
            console.log('There was a mistake updating the song', response);
        });
    }

    ///api/albums/:albumId/songs/:songId
    vm.deleteSong = function(song) {
        $http({
            method: 'DELETE',
            url: '/api/albums/' + $routeParams.id + '/songs/' + song._id,
            params: song
        }).then(function deleteSuccess(json) {
            vm.album = json.data;
        }, function deleteError(response) {
            console.log('There was a mistake deleting the song', response);
        });
    }

    vm.createSong = function(song) {
        $http({
            method: 'POST',
            url: '/api/albums/' + $routeParams.id + '/songs',
            data: song
        }).then(function createSuccess(json) {
            vm.album = json.data;
        }, function createError(response) {
            console.log('There was a mistake creating a song', response);
        });
    }

}
>>>>>>> 84c4816c2623a4297512b6d3918939204192f204
