/*
 * @Author: iceStone
 * @Date:   2016-01-22 17:46:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 12:19:43
 */

'use strict';

(function() {
  var hotModule = angular.module('app.movie', []);

  hotModule
    .controller('MovieController', ['$scope', '$http', '$route', '$routeParams', 'AppConfig',
      function($scope, $http, $route, $routeParams, AppConfig) {

        // 开始时通过loading标识为正在加载
        $scope.loading = true;
        // 每页大小
        $scope.size = AppConfig.page_size;

        $scope.currentPage = $routeParams.page || 1;
        $scope.type = $routeParams.type || 'in_theaters';

        $scope.start = $scope.size * ($scope.currentPage - 1);
        $scope.totalItems = 100000;
        // 将回到函数挂到window对象下
        window.doubanMovieCallback = function(data) {
          $scope.movies = data;
          $scope.loading = false;
          $scope.totalItems = data.total;
        };
        $http.jsonp(AppConfig.movies_api + $scope.type + '?callback=doubanMovieCallback&count=' + $scope.size + '&start=' + $scope.start);

        $scope.$watch('currentPage', function(now, old) {
          if (now !== old) {
            $route.updateParams({
              page: now
            });
          }
        });
      }
    ]);
})();
