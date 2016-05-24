'use strict';

/**
 * @ngdoc function
 * @name mixinaidApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the mixinaidApp
 */
angular.module('mixinaidApp')
    .controller('AllCtrl', function ($scope, $firebaseArray, $sce) {

        $scope.submitComment = submitComment;
        $scope.trust = trust;
        $scope.filter = '';
        $scope.save = save;

        var ref = new Firebase("https://mixinaid.firebaseio.com/mixins");
        $scope.mixinsArray = $firebaseArray(ref);

        function submitComment(mixin, user) {
            if (mixin.comment.text === '') {
                return;
            }
            var comment = {
                text: mixin.comment.text,
                user: user
            }
            console.log($scope.mixinsArray[mixin.$id].comments);
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
