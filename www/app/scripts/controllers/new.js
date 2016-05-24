'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
    .controller('NewCtrl', function ($scope, $firebaseArray, user, $location) {

        $scope.saveMixin = saveMixin;

        // Firebase Handle
        var ref = new Firebase("https://mixinaid.firebaseio.com/mixins");
        $scope.mixinsArray = $firebaseArray(ref);

        // Get username
        $scope.email = user.password.email;
        $scope.username = $scope.email.substring(0, $scope.email.indexOf('@'));

        $scope.newMixin = {
            comments: [{
                user: $scope.username,
                text: ''
            }],
            title: '',
            saved: true,
            copied: false,
            codePen: '',
            submittedBy: $scope.username,
            mixin: '',
            comment: {
                text: ''
            }
        };

        function saveMixin() {
            if (!$scope.mixinSubmitted && $scope.newMixin.title) {
                $scope.mixinSubmitted = true;
                $scope.mixinsArray.$add($scope.newMixin).then(function () {
                    console.log('saved');
                    $location.path('#/all');
                });
            } else {
                console.log('title required');
            }

        }




    });
