/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
    .module('tunely', [])
    .controller('AlbumsIndexController', AlbumsIndexController);
// ^ the first argument is a string naming the controller,
// the second argument is a function that defines the capacities
// of the controller.

AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController($http) {
    var vm = this;
    vm.newAlbum = {};

    vm.albums = [];

    $http({
        method: 'GET',
        url: '/api/albums'
    }).then(successGetAlbums, error);

    function successGetAlbums(response) {
        vm.albums = response.data;
    }

    function error(err) {
        console.log(err);
    }

    vm.createAlbum = function(album){
      console.log(album);
      $http({
        method: 'POST',
        url: '/api/albums',
        data: album
      }).then(successPostAlbum, error);
    }

    function successPostAlbum(response) {
      console.log(response);
        vm.albums.push(response.data);
    }
}
