(function(){
	'use strict';
	// console.log('login service');
	angular
	.module('pinterinApp')
	.factory('KategoriService', KategoriService);

	KategoriService.$inject = ['$rootScope', '$http'];

	function KategoriService($rootScope, $http){
		// console.log('Auth service');
		var env = $rootScope.env;
		var baseUrl = 'http://api.pinterin.online';

		var getKategori = function(){

			// if (env == 'mock') {
			// 	return Promise.resolve({
			// 		data: {
			// 			accesstoken: 'DEzNGFiMGYwMDFjMzMxM2YzYzE',
			// 		},
			// 	});
			// }
			
		var options= {
       	method: 'GET',
         url: baseUrl + '/kategori',
         headers: {
          'content-type': 'application/x-www-form-urlencoded',
         },
       };

       return $http(options);
		};
		}

		return {
			getKategori : getKategori
		};
	}


})();