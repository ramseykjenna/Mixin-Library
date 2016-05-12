'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
