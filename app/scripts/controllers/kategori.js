'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:KategoriCtrl
 * @description
 * # KategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('KategoriCtrl', function ($scope, $state, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

$scope.getData = function(){
      $http.get('https://private-anon-e42cb620aa-pinterin.apiary-mock.com/kategori').then(success, error);

       function success(response){
        console.log(response)
        $scope.records=response.data.articles;
      }

      function error(){
        console.log('error')
    }
}

     $scope.addKategoriButton = function(){
        $state.go('dashboard.add-kategori');
    };
  });
