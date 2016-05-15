'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
