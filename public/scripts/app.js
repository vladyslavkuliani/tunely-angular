angular.module('tunely', []).controller('AlbumsIndexController', AlbumsIndexController);

AlbumsIndexController.$inject = ['$http'];
function AlbumsIndexController($http){
  var vm = this;
  vm.newAlbum = {};

  vm.newAlbum = {
    name: 'License to Ill',
    artistName: 'Beastie Boys'
  };

  vm.albums = [];

  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(successGetAlbums, error);

  function successGetAlbums(response){
    vm.albums = response.data;
  }

  function error(err){
    console.log(err);
  }
}
