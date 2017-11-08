'use strict';

/**
 * @ngdoc function
 * @name pinterinApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the pinterinApp
 */
  //  angular.module('pinterinApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  // .controller('DashboardCtrl', function ($scope, $timeout, $mdSidenav, $state) {
  //   $scope.toggleLeft = buildToggler('left');
  //   $scope.toggleRight = buildToggler('right');

  //   function buildToggler(componentId) {
  //     return function() {
  //       $mdSidenav(componentId).toggle();
  //     };
  //   }
  // });

angular.module('pinterinApp')
  .controller('DashboardCtrl', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.logoutButton = function(){
        $state.go('login');
    };

     $scope.dashboardButton = function(){
        $state.go('dashboard');
    };

      $scope.kategoriButton = function(){
        $state.go('dashboard.kategori');
    };

      $scope.subKategoriButton = function(){
        $state.go('dashboard.sub-kategori');
    };

      $scope.soalButton = function(){
        $state.go('dashboard.soal');
    };

      $scope.jawabanButton = function(){
        $state.go('dashboard.jawaban');
    };

      $scope.featuresButton = function(){
        $state.go('dashboard.features');
    };

      $scope.faqButton = function(){
        $state.go('dashboard.faq');
    };

      $scope.aboutButton = function(){
        $state.go('dashboard.about-web');
    };
  });