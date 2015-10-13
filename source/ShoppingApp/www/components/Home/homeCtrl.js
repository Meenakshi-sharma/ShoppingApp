var homeCtrl;

homeCtrl = (function($stateParams) {
    function homeCtrl() {

       console.log("asdas"+$stateParams);
       
	  
        
    }
 
    

    return homeCtrl;
})();

homeModule.controller('homeCtrl', homeCtrl);