'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:JawabanCtrl
 * @description
 * # JawabanCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('JawabanCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.addJawabanButton = function(){
        $state.go('dashboard.add-jawaban');
    };

  });
