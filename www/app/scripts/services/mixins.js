'use strict';

/**
 * @ngdoc service
 * @name mixinaidApp.mixins
 * @description
 * # mixins
 * Service in the mixinaidApp.
 */

angular
    .module('mixinaidApp')
    .factory('mixinData', mixinData);

mixinData.$inject = ['$firebaseArray'];

function mixinData($firebaseArray) {

    var ref = new Firebase("https://mixinaid.firebaseio.com/mixins");

    var mixinsArray = $firebaseArray(ref);

    return {
        mixinsArray: mixinsArray
    };


}
