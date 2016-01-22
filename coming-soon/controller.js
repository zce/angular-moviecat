/*
 * @Author: iceStone
 * @Date:   2016-01-22 17:46:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-22 18:00:53
 */

'use strict';

(function() {
  var hotModule = angular.module('app.coming-soon', []);

  hotModule.controller('ComingSoonController', ['$scope', '$http', 'ApiAddress', function($scope, $http, ApiAddress) {

    // 开始时通过loading标识为正在加载
    $scope.loading = true;

    // 将回到函数挂到window对象下
    window.comingSoonMoviesCallback = function(data) {
      $scope.comingSoonMovies = data;
      $scope.loading = false;
    };
    $http.jsonp(ApiAddress.coming_soon_movies + '?callback=comingSoonMoviesCallback');
  }])
})();
