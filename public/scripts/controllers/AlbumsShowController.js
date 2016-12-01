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

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
>>>>>>> 84c4816c2623a4297512b6d3918939204192f204
