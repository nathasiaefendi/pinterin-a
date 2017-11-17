(function(){


'use strict';
/**
 * @ngdoc function
 * @name pinterinApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pinterinApp
 */
// angular.module('pinterinApp')
//   .controller('LoginCtrl', function ($scope, $state) {

//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];

//     console.log('logins');

//     $scope.test = function(){
//       console.log('login');
//     };
    
//      $scope.loginButton = function(){
//         $state.go('dashboard');
//     };

//      $scope.cancelButton = function(){
//         $state.go('landing.home');
//     };

//   });

angular.module('pinterinApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'AuthService'];

function LoginCtrl($scope, $state,  AuthService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.username = null;
    $scope.password = null;
    //two way data binding. 


    $scope.test = function(){
      console.log('login');
    };
    
     $scope.loginButton = function($event){

      // AuthService .loginauth();
      // $state.go('dashboard');

      var promise = AuthService.loginauth(
        $scope.username,
        $scope.password,
        );

      promise
      .then(function(response){
        console.log(response);

        var token = response.data.accesstoken;

        console.log(token);

        if(token){
          localStorage.setItem('token',token);
        }

      })

      .catch(function(response){
        console.log('error');
      });

    };

     $scope.cancelButton = function(){
        $state.go('landing.home');
    };

  };


})();

//akese api> response 200 > simpan token di local storage
//cookies
//local storage
//local session

