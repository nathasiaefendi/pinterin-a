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
        // console.log('logins', event);
        // console.log($scope.username , $scope.password);


      //   data: {
      //     username: $scope.username,
      //     password: $scope.password,
      //    };
      //   var promise = $http.post('https://private-anon-e42cb620aa-pinterin.apiary-proxy.com/login').then(success, error);

      //  function success(response){
      //   console.log(response)
      //   $scope.records=response.data.articles;
      // }

      // function error(){
      //   console.log('error')
      //  }
      // var options= {
      //   method: 'POST',
      //    url: 'http://api.cariilmu.online/v1/admin/login',
      //    headers: {
      //     'content-type': 'application/x-www-form-urlencoded',
      //    },
      //    data: {
      //     username: $scope.username,
      //     password: $scope.password,                                          
      //    },
      //  };

      var promise = AuthService.loginauth(
        $scope.email,
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

