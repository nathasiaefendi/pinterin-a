

'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('AboutCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
