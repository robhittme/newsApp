'use strict';

angular
  .module('newsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'newsApp.directive',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/timeline', {
        templateUrl:'views/timeline.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
angular.module('newsApp.directive', [])
  