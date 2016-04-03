'use strict';

/**
 * @ngdoc overview
 * @name tonygApp
 * @description
 * # tonygApp
 *
 * Main module of the application.
 */
angular
  .module('tonygApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider, LightboxProvider) {
      LightboxProvider.fullScreenMode = true;
      LightboxProvider.templateUrl = '../views/lightbox.html';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/radio', {
        templateUrl: 'views/radio.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tv', {
        templateUrl: 'views/tv.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/art', {
        templateUrl: 'views/art.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sales1', {
        templateUrl: 'views/sales1.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sales2', {
        templateUrl: 'views/sales2.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sales3', {
        templateUrl: 'views/sales3.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
