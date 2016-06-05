'use strict';

angular.module('repoExplorerApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl as mainCtrl'
    });
  });
