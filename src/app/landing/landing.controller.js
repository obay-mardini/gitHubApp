(function() {
    'use strict'
    
    angular
        .module('app.landing')
        .controller('LandingController', LandingController);
    
    function LandingController() {
        var vm = this;
        vm.name = 'obay'
    }
})();