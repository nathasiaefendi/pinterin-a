'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:AddJawabanCtrl
 * @description
 * # AddJawabanCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('AddJawabanCtrl', function ($scope , $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

       $scope.cancelButton = function(){
        $state.go('dashboard.jawaban');
    };
  });
