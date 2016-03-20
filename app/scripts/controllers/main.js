'use strict';

/**
 * @ngdoc function
 * @name tonygApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tonygApp
 */
angular.module('tonygApp')
  .controller('MainCtrl', function ($scope, $animate) {

  	$scope.test = '../../images/logo.png';
  	$animate.enabled(true); 
    	
    	$scope.myInterval = 0;
    	$scope.noWrapSlides = false;
    	$scope.active = 0;
    	$scope.slides = [
    		{image: '../../images/logo.png', text: "hello world"}, 
    		{image: '../../images/radio-bg.jpg', text: "butts"}, 
    		{image: '../../images/yeoman.png', text: "suckit"}
    	];
    	var currIndex = 0;


  });
