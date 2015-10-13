var signupCtrl;

signupCtrl = (function() {
    function signupCtrl(signupSrvc) {
        this.signupSrvc = signupSrvc;
       
	   console.log("this");
        this.user = {};
        
        this.ShowPassword = 'password';
    }

    signupCtrl.prototype.userLogin = function() {
        this.signupSrvc.chkLogin(this.user.username, this.user.password);
        console.log(this.user.username);
        
    }
    return signupCtrl;

})();
signupModule.controller('signupCtrl', signupCtrl);