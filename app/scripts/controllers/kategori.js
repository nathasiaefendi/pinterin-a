(function(){

'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:KategoriCtrl
 * @description
 * # KategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('KategoriCtrl', KategoriCtrl);

  KategoriCtrl.$inject = ['$scope', '$state', 'AuthService'];

  function ($scope, $state, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   var promise = KategoriService.getKategori();

      promise
      .then(function(response){
        console.log(response);

        var data =response.data.articles;

        console.log(data);

        // if(token){
        //   localStorage.setItem('token',token);
        // }

      }) 



     $scope.addKategoriButton = function(){
        $state.go('dashboard.add-kategori');
    };
  };


})();

