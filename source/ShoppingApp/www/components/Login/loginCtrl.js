var loginCtrl;

loginCtrl = (function()
{ 	
	function loginCtrl(loginSrvc) {
	  	
	  	this.loginSrvc = loginSrvc;
	  	this.user={};
	  	this.ShowPassword='password';
  	}

	loginCtrl.prototype.userLogin=function()
		{
			this.loginSrvc.chkLogin(this.user.username,this.user.password);
		}
	
  	return loginCtrl;
})();

loginModule.controller('loginCtrl', loginCtrl);

