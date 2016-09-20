(function() {
    'use strict'
    
    angular
        .module('app.landing')
        .controller('LandingController', LandingController);
    
    function LandingController() {
        var vm = this;
        vm.name = 'obay'
        vm.searchGitHub = searchGitHub;
        vm.addRepo = addRepo;
        
        function searchGitHub() {
            $.get('https://api.github.com/users/goeuro/repos', function(repos) {
                vm.repos = repos.map(function(repo){
                   return {url: repo.html_url, name: repo.name} 
                });
            });        
        }
        
        function addRepo(data) {
            data.forEach(function(repo){
                $repos.append(repo.name)
            });
        }
    }
})();