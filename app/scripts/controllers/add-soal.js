'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:AddSoalCtrl
 * @description
 * # AddSoalCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('AddSoalCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.cancelButton = function(){
        $state.go('dashboard.soal');
    };

  });
