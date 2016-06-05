'use strict';

angular.module('repoExplorerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('repos', {
        url: '/repos/:token',
        templateUrl: 'app/repos/repos.html',
        controller: 'ReposCtrl as repoCtrl'
      });
  });
