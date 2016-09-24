(function() {
    'use strict'
    
    angular
        .module('app.landing')
        .controller('LandingController', LandingController);
    
    //saved to the window object for testing purpose 
    window.myControllers = {
        landing: LandingController
    };
    
    function LandingController($scope) {
        var scope = $scope;
        var vm = this;
        
        vm.getGitData = getGitData;
        vm.searchGitHub = searchGitHub;
        vm.checkUser = checkUser;
        vm.error = null;
        
        //saved to the window object for testing purpose  
        window.myControllers.checkUser = checkUser;
        window.myControllers.searchGitHub = searchGitHub;
        
        function getGitData(user) {
            var user = user || $("#repoInput").val();
            vm.repos = {};
            vm.error = null;
            checkUser(user).then(searchGitHub).then(function() {
                $scope.$apply()
            }).catch(function(err){
                vm.error = err.statusText || err;
                vm.repos = {};
                $scope.$apply();
            })
        }
        
        function checkUser(user) { 
            if(user.split(' ').length > 1) {
                return new Promise(function(resolve, reject){
                    reject("user name shouldn't have a space"); 
                });
            } else {
                return $.get('https://api.github.com/users/' + user);
            }
            
        }
        
        function searchGitHub(user) {
            user = user.login
            return new Promise(function(resolve, reject){
                resolve($.get('https://api.github.com/users/' + user + '/repos'));
            }).then(function(repos) {
                if(repos.length === 0) {
                    throw new Error ('the user has no repos')
                }
                 vm.repos = repos.map(function(repo){
                    return {url: repo.html_url, name: repo.name} 
                });
                return repos.length;
            });
        }

    }
})();