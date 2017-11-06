'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('MainCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
