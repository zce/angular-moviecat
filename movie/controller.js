/*
 * @Author: iceStone
 * @Date:   2016-01-22 17:46:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 13:53:32
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
        if ($scope.type === 'search') {
          $scope.type += '?q=' + $routeParams.q + '&';
          console.log($scope.type);
        } else {
          $scope.type += '?';
        }

        $scope.start = $scope.size * ($scope.currentPage - 1);
        $scope.totalItems = 100000;
        // 将回到函数挂到window对象下
        window.doubanMovieCallback = function(data) {
          // console.log(122);
          if (data.msg) {
            // 有错误信息产生；
            $scope.message = data.msg;
          } else {
            $scope.message = '';
            $scope.movies = data;
            $scope.totalItems = data.total;
          }
          $scope.loading = false;
        };

        var url = AppConfig.movies_api + $scope.type + 'callback=doubanMovieCallback&count=' + $scope.size + '&start=' + $scope.start;
        $http.jsonp(url).error(function() {
          // $scope.message = '没有请求到相应的数据或没有权限！';
          // $scope.loading = false;
          // $scope.totalItems = 0;
        });

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
