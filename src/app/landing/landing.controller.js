(function() {
    'use strict'
    
    angular
        .module('app.landing')
        .controller('LandingController', LandingController);
    
    function LandingController() {
        var vm = this;
        vm.name = 'obay'
        vm.searchGitHub = searchGitHub;
        vm.checkUser = checkUser;
        
        function checkUser() {
            $.get('https://api.github.com/users/' + $('#repoInput').val(), function(result) {
                console.log(result.login)
                if(result.message === "Not Found") {
                    //return error under the input
                } else if(result.login) {
                    console.log('here');
                    vm.searchGitHub();
                } else {
                    //return api does not response
                }
            }); 
        }
        
        function searchGitHub() {
            $.get('https://api.github.com/users/goeuro/repos', function(repos) {
                vm.repos = repos.map(function(repo){
                   return {url: repo.html_url, name: repo.name} 
                });
            });        
        }

    }
})();