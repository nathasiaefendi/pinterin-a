'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:AddSubKategoriCtrl
 * @description
 * # AddSubKategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('AddSubKategoriCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.cancelButton = function(){
        $state.go('dashboard.sub-kategori');
    };
  });
