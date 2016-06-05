'use strict';

angular.module('repoExplorerApp', ['repoExplorerApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ui.bootstrap', 'darthwade.dwLoading'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
