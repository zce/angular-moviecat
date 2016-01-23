/*
 * @Author: iceStone
 * @Date:   2016-01-22 17:46:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 11:53:12
 */

'use strict';

(function() {
  var hotModule = angular.module('app.coming_soon', []);

  hotModule.controller('ComingSoonController', ['$scope', '$http', '$route', '$routeParams', 'ApiAddress',
    function($scope, $http, $route, $routeParams, ApiAddress) {

      // 开始时通过loading标识为正在加载
      $scope.loading = true;
      // 每页大小
      $scope.size = 5;
      $scope.currentPage = $routeParams.page || 1;
      $scope.start = $scope.size * ($scope.currentPage - 1);
      $scope.totalItems = 100000;
      // 将回到函数挂到window对象下
      window.comingSoonMoviesCallback = function(data) {
        $scope.comingSoonMovies = data;
        $scope.loading = false;
        // $scope.totalPages = Math.ceil(data.total / $scope.size);
        $scope.totalItems = data.total;
      };
      $http.jsonp(ApiAddress.coming_soon_movies + '?callback=comingSoonMoviesCallback&count=' + $scope.size + '&start=' + $scope.start);

      $scope.$watch('currentPage', function(newVal, old, scope) {
        if (newVal !== old) {
          // console.log(`${newVal}--${old}--${$scope.currentPage}`);
          $route.updateParams({
            page: newVal
          });
        }
      });
    }
  ])
})();
