/*
 * @Author: iceStone
 * @Date:   2016-01-22 17:46:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-22 17:52:39
 */

'use strict';

(function() {
  var hotModule = angular.module('app.hot', []);

  hotModule.controller('HotController', ['$scope', '$http', 'ApiAddress', function($scope, $http, ApiAddress) {

    // 开始时通过loading标识为正在加载
    $scope.loading = true;

    // 将回到函数挂到window对象下
    window.hotMoviesCallback = function(data) {
      $scope.hotMovies = data;
      $scope.loading = false;
    };
    $http.jsonp(ApiAddress.hot_movies + '?callback=hotMoviesCallback');
  }])
})();
