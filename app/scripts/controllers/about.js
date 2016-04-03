'use strict';

/**
 * @ngdoc function
 * @name tonygApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tonygApp
 */
angular.module('tonygApp')
  .controller('AboutCtrl', function($scope) {

  	$('#carousel-art').carousel();

  	$scope.images = [
  	                  "images/art/2dog.png", 
  	                  "images/art/3dog.png", 
  	                  "images/art/4dog.png", 
  	                  "images/art/5dog.png", 
  	                  "images/art/6dog.png", 
  	                  "images/art/7dog.png",
  	                  "images/art/8dog.png",
  	                  "images/art/9Face_time.png",
  	                  "images/art/10Nose_rider.1.png",
  	                  "images/art/11Nose_rider.2.png",
  	                  "images/art/12Nose_rider.3.png",
  	                  "images/art/13RidinTheNose.png",
  	                  "images/art/14Surfer.1.png",
  	                  "images/art/15Surfer.2.png",
  	                  "images/art/16Surfer.3.png",
  	                  "images/art/17Surfer.4.png",
  	                  "images/art/18Surfer.5.png",
  	                  "images/art/19Surfer.6.png"]
    
  });
