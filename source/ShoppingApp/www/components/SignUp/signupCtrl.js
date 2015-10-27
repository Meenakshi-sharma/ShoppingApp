var signupCtrl;

signupCtrl = (function() {
    
    function signupCtrl(signupSrvc) {

        this.signupSrvc = signupSrvc;
        this.user = {};
        
        this.ShowPassword = 'password';
    }

    signupCtrl.prototype.userLogin = function() {
        this.signupSrvc.chkLogin(this.user.username, this.user.password);
        
    }
    return signupCtrl;

})();
signupModule.controller('signupCtrl', signupCtrl);