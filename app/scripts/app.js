'use strict';

var env = 'mock';

/**
 * @ngdoc overview
 * @name pinterinApp
 * @description
 * # pinterinApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('pinterinApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .run(run);

  run.$inject = ['$rootScope', '$state', 'AuthService'];

function run($rootScope, $state, AuthService) {
  $rootScope.env = env;    

  var whitelist = [
  'login',
  ];


  $rootScope.$on('$locationChangeSuccess', function(){

  if (!AuthService.getToken() && isNeedAuth()) {

    console.log('belum login');
    $state.go('login');

  }
  });

  function isNeedAuth(argument) {
    var current = $state.current.name;

    return whitelist.indexOf(current) == -1;
  }
}


  // .config(function ($stateProvider, $urlRouterProvider) {
  

  //  // .otherwise({
  //     //   redirectTo: '/'
  //     // });
  // });
