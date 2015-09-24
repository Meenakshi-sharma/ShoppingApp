var loginCtrl;

loginCtrl = (function()
{ 	
	function loginCtrl() {
	  	var lc=this;
	  	lc.ShowPassword='password';
  	}
  	return loginCtrl;

})();
 loginModule.controller('loginCtrl', loginCtrl);

