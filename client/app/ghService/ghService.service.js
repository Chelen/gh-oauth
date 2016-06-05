'use strict';

angular.module('repoExplorerApp')
  .factory('ghService', function ($http) {
    var self = this;
    self.token = "";

    return {
      setToken : function(t){
        self.token = t;
        return $http.get('https://api.github.com/user?access_token='+self.token);
      },
      getRepos : function(url){
        return $http.get(url+'?access_token=' + self.token);
      }
    };
  });
