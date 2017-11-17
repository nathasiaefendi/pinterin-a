(function(){
	'use strict';
	// console.log('login service');
	angular
	.module('pinterinApp')
	.factory('LogoutService', LogoutService);

	LogoutService.$inject = ['$rootScope', '$http'];

	function LogoutService($rootScope, $http){
		// console.log('Auth service');
		var env = $rootScope.env;
		var baseUrl = 'http://api.pinterin.online';

		var logout = function(){

			if (env == 'mock') {
				return Promise.resolve({
					data: {
						accesstoken: ' ',
					},
				});
			}
			
		var options= {
        method: 'POST',
         url: baseUrl + '/logout',
         headers: {
          'content-type': 'application/x-www-form-urlencoded',
         },
       };

       return $http(options);
		};

		var getToken = function(){
			return localStorage.getItem('token');
		}

		return {
			logout : logout
			getToken: getToken,
		};
	}


})();