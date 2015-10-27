var loginCtrl;

loginCtrl = (function($state, $ionicHistory, $stateParams, $ionicLoading, $rootScope) {
    function loginCtrl(loginSrvc , $state , $stateParams) {

       this.loginSrvc = loginSrvc;
       window.localStorage['id'] = 1 ;
	   console.log(window.localStorage['id']);
        this.user = {};
        this.ShowPassword = 'password';
    }

    loginCtrl.prototype.userLogin = function() {
        this.loginSrvc.chkLogin(this.user.username, this.user.password);
        console.log(this.user.username);
        console.log(this);
       
    }

    return loginCtrl;
})();

loginModule.controller('loginCtrl', loginCtrl);
