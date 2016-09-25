(function() {
    'use strict'
    
    angular
        .module('app.testing')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/testing', {
            templateUrl: 'app/test/index.html',
            controller: 'TestingController',
            controllerAs: 'vm'
        });
    }
    
})();