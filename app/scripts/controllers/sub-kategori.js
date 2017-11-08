'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:SubKategoriCtrl
 * @description
 * # SubKategoriCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('SubKategoriCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addSubKategoriButton = function(){
        $state.go('dashboard.add-sub-kategori');
    };

  });
