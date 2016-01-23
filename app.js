/*
 * @Author: iceStone
 * @Date:   2016-01-22 15:57:55
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 12:52:29
 */

'use strict';

var app = angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'app.movie',
  // 'app.in_theaters',
  // 'app.coming_soon',
  // 'app.top',
  'app.components.nav'
]);

/*服务的URL配置*/
app.constant('AppConfig', {
  page_size: 10,
  movies_api: 'https://api.douban.com/v2/movie/',
});

// 配置路由
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/:type/:page?', {
      controller: 'MovieController',
      templateUrl: 'movie/view.html'
    })
    // .when('/in_theaters/:page?', {
    //   controller: 'InTheatersController',
    //   templateUrl: 'in_theaters/view.html'
    // })
    // .when('/coming_soon/:page?', {
    //   controller: 'ComingSoonController',
    //   templateUrl: 'coming_soon/view.html'
    // })
    // .when('/top250/:page?', {
    //   controller: 'TopController',
    //   templateUrl: 'top250/view.html'
    // })
    .otherwise({
      redirectTo: '/in_theaters/1'
    });
}]);


// app.controller(
//   'NavController', ['$scope', '$location', function($scope, $location) {
//     $scope.isActive = function(path) {
//       return $location.path().substr(0, path.length) === path;
//     };
//   }]
// );
