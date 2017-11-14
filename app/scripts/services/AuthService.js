(function(){
	'use strict';
	// console.log('login service');
	angular
	.module('pinterinApp')
	.factory('AuthService', AuthService);

	AuthService.$inject = ['$rootScope', '$http'];

	function AuthService($rootScope, $http){
		// console.log('Auth service');
		var env = $rootScope.env;
		var baseUrl = 'http://api.cariilmu.online/v1';

		var login = function(email, password){

			if (env == 'mock') {
				return Promise.resolve({
					data: {
						accesstoken: 'accestokenbebas',
					},
				});
			}
		var options= {
        method: 'POST',
         url: baseUrl + '/admin/login',
         headers: {
          'content-type': 'application/x-www-form-urlencoded',
         },
         data: {
          email: email,
          password : password,                                         
         },
       };

       return $http(options);
		};

		// var getToken = function(){
		// 	return localStorage.getItem('token');
		// }

		return {
			loginauth: login,
			// getToken: getToken,
		};
	}


})();