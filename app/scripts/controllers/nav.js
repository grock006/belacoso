'use strict';


angular.module('tonygApp')
  .controller('NavCtrl', function ($scope, $location) {

  	$scope.portfolio = false;

  	$scope.isActive = function(route) {
  		if($location.path() === '/portfolio' || 
         $location.path() === '/radio' || 
         $location.path() === '/tv'){
 
  			$scope.portfolio = true
  		}
 
  		else if($location.path() === '/' ||
              $location.path() === '/art' ||
              $location.path() === '/contact'){
 
  			$scope.portfolio = false
        $scope.sales = false
 
  		}
      else if($location.path() === '/sales' || 
              $location.path() === 'sales1' ||
              $location.path() === 'sales2' ||
              $location.path() === 'sales3'){
 
          $scope.portfolio = true;
          $scope.sales = true;
 
      }
  	    return route === $location.path();
  	}


 });