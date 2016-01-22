/*
 * @Author: iceStone
 * @Date:   2016-01-22 23:49:43
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-23 00:21:53
 */

'use strict';

/**
 * app.demo Module
 *
 * Description
 */
angular.module('app.demo', [])
  .controller('DemoController', ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams) {
    $scope.totalItems = 102;
    $scope.currentPage = $routeParams.page || 1;

    $scope.$watch('currentPage', function(newVal, old, scope) {
      // console.log(scope);
      // if (newVal !== old) {
      console.log(`${newVal}--${old}--${$scope.currentPage}`);
      // $route.updateParams({
      //   page: newVal
      // });
      // }
    });
  }]);
