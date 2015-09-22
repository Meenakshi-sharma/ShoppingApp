(function () {
  'use strict';

  signupModule
      .config(function($stateProvider) {
  
  $stateProvider
      .state('signup', {
      url: '/signup',
      templateUrl: 'components/SignUp/signup.html',
      controller: 'signupCtrl as sp'
    })
      });
})();


