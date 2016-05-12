'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
  .controller('NewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
