'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
    .controller('MainCtrl', function ($scope, $sce, $firebaseArray, user) {


        $scope.submitComment = submitComment;
        $scope.trust = trust;
        $scope.filter = '';
        $scope.save = save;

        var ref = new Firebase("https://mixinaid.firebaseio.com/mixins");
        $scope.mixinsArray = $firebaseArray(ref);

        // Get username
        if (user) {
            $scope.email = user.password.email;
            $scope.username = $scope.email.substring(0, $scope.email.indexOf('@'));
        }

        function submitComment(mixin) {
            if (mixin.comment.text === '') {
                return;
            }
            var comment = {
                text: mixin.comment.text,
                user: $scope.username
            }

            var mixinHandle = $scope.mixinsArray.$getRecord(mixin.$id);
            mixinHandle.comments.push(comment);
            mixinHandle.comment.text = '';
            $scope.mixinsArray.$save(mixinHandle).then(function () {
                console.log('saved');
            });


        }

        function trust(val) {
            return $sce.trustAsHtml(val);
        }

        function save(mixin) {
            var mixinHandle = $scope.mixinsArray.$getRecord(mixin.$id);
            mixinHandle.saved = !mixinHandle.saved;
            $scope.mixinsArray.$save(mixinHandle).then(function () {
                console.log('saved');
            });
        }

    });
