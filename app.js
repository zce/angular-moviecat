/*
 * @Author: iceStone
 * @Date:   2016-01-22 15:57:55
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-22 17:07:08
 */

'use strict';


/**
 * MoviecatApp Module
 *
 * Description
 */
var moviecatApp = angular.module('MoviecatApp', []);

/*服务的URL配置*/
moviecatApp.constant('ApiAddress', {
  hot_movies: 'https://api.douban.com/v2/movie/in_theaters',
});

moviecatApp.controller('MainController', ['$scope', '$http', 'ApiAddress', function($scope, $http, ApiAddress) {
  // $scope.hotMovies = [];

  // 由于 douban API 不支持 angular.callbacks._0 这种类型的 callback 名称，所以不能直接使用 JSONP
  // $http({
  //   method: 'JSONP',
  //   url: APIURL
  // }).success(function(data) {
  //   $scope.hotMovies = data.subjects;
  // }).error(function(error) {
  // });

  // 将回到函数挂到window对象下
  window.hotMoviesCallback = function(data) {
    $scope.hotMovies = data.subjects;
  };
  $http.jsonp(ApiAddress.hot_movies + '?callback=hotMoviesCallback');
}]);
