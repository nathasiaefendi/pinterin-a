'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:AddKategoriCtrl
 * @description
 * # AddKategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('AddKategoriCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.cancelButton = function(){
        $state.go('dashboard.kategori');
    };

  });
