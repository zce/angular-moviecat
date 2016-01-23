/*
 * @Author: iceStone
 * @Date:   2016-01-22 15:57:55
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 11:59:06
 */

'use strict';

var app = angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'app.hot',
  'app.coming_soon',
  'app.demo',
  'app.components.nav'
]);

/*服务的URL配置*/
app.constant('AppConfig', {
  page_size: 10,
  hot_movies: 'https://api.douban.com/v2/movie/in_theaters',
  coming_soon_movies: 'https://api.douban.com/v2/movie/coming_soon',
  top250_movies: 'https://api.douban.com/v2/movie/top250',
  weekly_movies: 'https://api.douban.com/v2/movie/weekly',
  us_box_movies: 'https://api.douban.com/v2/movie/us_box',
  new_movies: 'https://api.douban.com/v2/movie/new_movies'
});

// 配置路由
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/hot/:page?', {
      controller: 'HotController',
      templateUrl: 'hot/view.html'
    })
    .when('/coming_soon/:page?', {
      controller: 'ComingSoonController',
      templateUrl: 'coming_soon/view.html'
    })
    .when('/demo/:page?', {
      controller: 'DemoController',
      templateUrl: 'demo/view.html'
    })
    .otherwise({
      redirectTo: '/hot/1'
    });
}]);


// app.controller(
//   'NavController', ['$scope', '$location', function($scope, $location) {
//     $scope.isActive = function(path) {
//       return $location.path().substr(0, path.length) === path;
//     };
//   }]
// );
