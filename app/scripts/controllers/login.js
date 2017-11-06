'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('LoginCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = function(){
    	console.log('login');
    };
    
     $scope.loginButton = function(){
        $state.go('dashboard');
    };

  });
