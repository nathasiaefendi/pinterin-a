'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:SoalCtrl
 * @description
 * # SoalCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('SoalCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.addSoalButton = function(){
        $state.go('dashboard.add-soal');
    };

  });
