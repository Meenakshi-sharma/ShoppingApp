(function () {
  'use strict';

  loginModule
      .config(function($stateProvider) {
  
  $stateProvider
      .state('login', {
      url: '/login',
      templateUrl: 'components/Login/login.html'
    })
      });
})();


