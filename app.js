/*
 * @Author: iceStone
 * @Date:   2016-01-22 15:57:55
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 00:52:35
 */

'use strict';


/**
 * MoviecatApp Module
 *
 * Description
 */
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'app.hot', 'app.coming-soon', 'app.demo', 'app.components.nav']);

/*服务的URL配置*/
app.constant('ApiAddress', {
  hot_movies: 'https://api.douban.com/v2/movie/in_theaters',
  coming_soon_movies: 'https://api.douban.com/v2/movie/coming_soon'
});

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/hot/:page?', {
      controller: 'HotController',
      templateUrl: 'hot/view.html'
    })
    .when('/coming-soon/:page?', {
      controller: 'ComingSoonController',
      templateUrl: 'coming-soon/view.html'
    })
    .when('/demo/:page?', {
      controller: 'DemoController',
      templateUrl: 'demo/view.html'
    })
    .otherwise({
      // redirectTo: '/hot'
    });
}]);


app.controller(
  'NavController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(path) {
      return $location.path().substr(0, path.length) === path;
    };
  }]
);
