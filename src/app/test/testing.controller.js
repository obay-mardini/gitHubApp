(function() {
    'use strict'
    
    angular
        .module('app.testing')
        .controller('TestingController', TestingController);
    
    window.myControllers.landing();
    function TestingController($scope) {
         asyncTest("the user has github account", function(){
             window.myControllers.checkUser('obay-mardini').then(function(val){
                 start();
                  return equals(val.login, 'obay-mardini', 'Done!');
             })
           
        });
        
        asyncTest("The user has repo(s)  ", function(){
             window.myControllers.searchGitHub({login:'obay-mardini'}).then(function(val){
                 start();
                  return equals(val, '10', 'Done');
             })
           
        });   
        
    }
})();