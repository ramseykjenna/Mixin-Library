'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
  .controller('AllCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
