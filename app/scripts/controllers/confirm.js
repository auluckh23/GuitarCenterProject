'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('confirmCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
