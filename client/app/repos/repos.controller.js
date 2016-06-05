'use strict';


angular.module('repoExplorerApp')
  .controller('ReposCtrl', function(ghService, $stateParams, $http){
    var self = this;
    ghService.setToken($stateParams.token)
      .then(response => {
        self.username = response.data.login;
        ghService.getRepos(response.data.repos_url)
        .then(resp => {
          self.repos = resp.data;
        })
    })


  });

