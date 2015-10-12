var loginCtrl;

loginCtrl = (function($state, $ionicHistory, $stateParams, $ionicLoading, $rootScope) {
    function loginCtrl(loginSrvc , $state , $stateParams) {

       this.loginSrvc = loginSrvc;
       
	   
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