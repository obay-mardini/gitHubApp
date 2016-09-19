(function() {
  'use strict';

  angular
    .module('app', [])
   
    .controller('MyController', MyController);
    
    function MyController($scope) {
        $scope.message = "hello world";
    }
})();