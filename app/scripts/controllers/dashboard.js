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

  // $scope.opencloseNav = function(){
  //   console.log(cssSideNav);
  //   console.log(cssMain);
  // }

  // $scope.opencloseNav = function(){
  //   if (cssSideNav !== "75px") {
  //       document.getElementById("mySidenav").style.width = "250px";
  //       document.getElementById("main").style.marginLeft = "250px";
  //       var cssSideNav = window.getComputedStyle(elemSideNav, null).getPropertyValue("width");
  //       console.log(cssSideNav);
  //   } else {
  //        document.getElementById("mySidenav").style.width = "75px";
  //        document.getElementById("main").style.marginLeft = "75px";
  //        var cssSideNav = window.getComputedStyle(elemSideNav, null).getPropertyValue("width");
  //        console.log(cssSideNav);
  //   }
  // }

    var elemSideNav = document.getElementById("mySidenav");
    var elemMain = document.getElementById("main");
    $scope.opencloseNav = function(){

    var cssSideNav = window.getComputedStyle(elemSideNav, null).getPropertyValue("width");
    var cssMain = window.getComputedStyle(elemMain, null).getPropertyValue("marginLeft");

    if(cssSideNav === "75px"){
      console.log(cssSideNav);
      var cssSideNav = "250px";
      console.log(cssSideNav);
    }else{
      console.log(cssSideNav);
      var cssSideNav = "75px";
      console.log(cssSideNav);
    }
  }


  // if (cssSideNav !== "75px") {
  //    $scope.opencloseNav = function(){
  //       document.getElementById("mySidenav").style.width = "75px";
  //       document.getElementById("main").style.marginLeft = "75px";
  //      console.log(cssSideNav);
  //     }
  //     }else {
  //        $scope.opencloseNav = function(){
  //       document.getElementById("mySidenav").style.width = "250px";
  //       document.getElementById("main").style.marginLeft = "250px";
  //       var cssSideNav = window.getComputedStyle(elemSideNav, null).getPropertyValue("width");
  //       console.log(cssSideNav);
  //     }}


    // var sideNavSize = document.getElementById("mySidenav").style.width;
    // var sideNavMain = document.getElementById("main").style.marginLeft;



    //  $scope.opencloseNav = function(){
    //   document.getElementById("mySidenav").style.width = "250px";
    //    document.getElementById("main").style.marginLeft = "250px";
    // };

    // $scope.closeNav = function(){
    //   document.getElementById("mySidenav").style.width = "50px";
    //   document.getElementById("main").style.marginLeft = "50px";
    // };



/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */

  });
