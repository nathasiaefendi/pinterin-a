'use strict';

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
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/landing/home');
    $urlRouterProvider.when('/landing', '/landing/home');
    $urlRouterProvider.when('/', '/landing/home');

    $stateProvider
      .state('landing.home', {
        url: '/home',
        views: {
        'level1': {
           templateUrl: 'views/main.html',
           controller: 'MainCtrl',
          controllerAs: 'main'
         }
        }
      })
      .state('landing.about', {
        url: '/about',
        views: {
          'level1': {
             templateUrl: 'views/about.html',
             controller: 'AboutCtrl',
             controllerAs: 'about'
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'level0' : {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'level0': {
             templateUrl: 'views/dashboard.html',
             controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
          }
        }
      })
      .state('landing', {
        url: '/landing',
        views: {
          'level0': {
             templateUrl: 'views/landing.html',
             controller: 'LandingCtrl',
             controllerAs: 'landing'
          }
        }
      })
      .state('landing.artikel', {
        url: '/artikel',
        views: {
          'level1': {
            templateUrl: 'views/artikel.html',
            controller: 'ArtikelCtrl',
            controllerAs: 'artikel'
          }
        }
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
