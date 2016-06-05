'use strict';

angular.module('repoExplorerApp')
  .controller('MainCtrl', function($http){
    var self = this;
    self.login = function(){
      $http.get('/authUrl')
        .then(response => {
          window.location.replace(response.data.url);
        });
    }
  });
