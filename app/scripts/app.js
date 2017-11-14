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

  .run(function($rootScope){
    $rootScope.env = env;
  })


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

      // below this lvl stll undefined
      .state('dashboard-index', {
        url: '/index',
        views: {
          'level2': {
            templateUrl: 'views/dashboard-index.html',
            controller: 'DashboardIndexCtrl',
            controllerAs: 'dashboardIndex'
          }
        }
      })

     .state('dashboard.kategori', {
        url: '/kategori/list',
        views: {
          'level2': {
           templateUrl: 'views/kategori.html',
           controller: 'KategoriCtrl',
           controllerAs: 'kategori'
          }
        }
      })

      .state('dashboard.sub-kategori', {
        url: '/subcategory/list',
        views: {
          'level2': {
             templateUrl: 'views/sub-kategori.html',
             controller: 'SubKategoriCtrl',
            controllerAs: 'subKategori'
          }
        }
      })

      .state('dashboard.soal', {
        url: '/soal/list',
        views: {
          'level2': {
            templateUrl: 'views/soal.html',
            controller: 'SoalCtrl',
            controllerAs: 'soal'
          }
        }
      })

      .state('dashboard.jawaban', {
        url: '/jawaban/list',
        views: {
          'level2': {
           templateUrl: 'views/jawaban.html',
           controller: 'JawabanCtrl',
           controllerAs: 'jawaban'
          }
        }
      })

     .state('dashboard.features', {
        url: '/features',
        views: {
          'level2': {
             templateUrl: 'views/features.html',
             controller: 'FeaturesCtrl',
             controllerAs: 'features'
          }
        }
      })

   .state('dashboard.faq', {
        url: '/faq',
        views: {
          'level2': {
             templateUrl: 'views/faq.html',
             controller: 'FaqCtrl',
             controllerAs: 'faq'
          }
        }
      })

      .state('dashboard.about', {
        url: '/about',
        views: {
          'level2': {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl',
              controllerAs: 'about'
          }
        }
      })

      .state('dashboard.about-web', {
        url: '/about-web',
        views: {
          'level2': {
              templateUrl: 'views/about-web.html',
              controller: 'AboutWebCtrl',
              controllerAs: 'aboutWeb'
          }
        }
      })

      .state('dashboard.add-kategori', {
        url: '/kategori/add',
        views: {
          'level2': {
           templateUrl: 'views/add-kategori.html',
            controller: 'AddKategoriCtrl',
            controllerAs: 'addKategori'
          }
        }
      })

      .state('dashboard.add-sub-kategori', {
        url: '/subcategory/add',
        views: {
          'level2': {
           templateUrl: 'views/add-sub-kategori.html',
            controller: 'AddSubKategoriCtrl',
            controllerAs: 'addSubKategori'
          }
        }
      })

      .state('dashboard.add-soal', {
        url: '/soal/add',
        views: {
          'level2': {
            templateUrl: 'views/add-soal.html',
            controller: 'AddSoalCtrl',
            controllerAs: 'addSoal'
          }
        }
      })

      .state('dashboard.add-jawaban', {
        url: '/jawaban/add',
        views: {
          'level2': {
           templateUrl: 'views/add-jawaban.html',
            controller: 'AddJawabanCtrl',
            controllerAs: 'addJawaban'
          }
        }
      })

      .state('dashboard.add-features', {
        url: '/add-features',
        views: {
          'level2': {
             templateUrl: 'views/add-features.html',
              controller: 'AddFeaturesCtrl',
              controllerAs: 'addFeatures'
          }
        }
      })

      .state('dashboard.add-faq', {
        url: '/add-faq',
        views: {
          'level2': {
            templateUrl: 'views/add-faq.html',
            controller: 'AddFaqCtrl',
            controllerAs: 'addFaq'
          }
        }
      })

      .state('dashboard/add-about', {
        url: '/add-about',
        views: {
          'level2': {
             templateUrl: 'views/add-about.html',
              controller: 'AddAboutCtrl',
              controllerAs: 'addAbout'
          }
        }
      })

   // .otherwise({
      //   redirectTo: '/'
      // });
  });
