'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.data = {
		"name": "",
		"lastName": "",
		"email": "",
		"phone": "",
		"description": ""
	}
	

	var url = 'http://private-e2353-js8.apiary-mock.com/posttoform';
	$scope.submit = function(){
		var req = {
			 method: 'POST',
			 url: 'http://example.com',
			 headers: {
			   'Access-Control-Allow-Origin': '*',
			   'Access-Control-Allow-Methods': 'POST',
			   'Access-Control-Allow-Headers': 'accept'
			 },
			 data: $scope.data
		}

		$http.post(url, $scope.data).then(function(response){
		console.log(response)
		alert("Data succesfully sent !");
	})
	};
  });
