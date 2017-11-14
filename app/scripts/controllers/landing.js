'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the pinterinApp
 */
angular.module('pinterinApp')
  .controller('LandingCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

jQuery(document).ready(function($){
$( function() {
  $('.accordion-toggle').click( function(e) {
  	 e.preventDefault();
      $(this).toggleClass('on');
		})
	})  
});

  });
