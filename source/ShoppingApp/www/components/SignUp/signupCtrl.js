var signupCtrl;

signupCtrl = (function()
 {
	function signupCtrl()
	{
		var sp=this;
	  	sp.ShowPassword='password';
  	}
  	return signupCtrl;

})();
signupModule.controller('signupCtrl', signupCtrl);