'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:KategoriCtrl
 * @description
 * # KategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('KategoriCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


     $scope.addKategoriButton = function(){
        $state.go('dashboard.add-kategori');
    };
  });
