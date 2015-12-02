var prodListingCtrl;



prodListingCtrl = (function($rootScope, $state , prodListingSrvc) {
	


	//var shwoMe = (showMe == false)? true:false ;

    function prodListingCtrl($rootScope, prodListingSrvc , $state , $stateParams) {
    //console.log(this);
	this.state = $state ;
	//this.prodListing = prodListingSrvc;
 // console.log(prodListingSrvc);
	var self = this;
      
prodListingSrvc.getCdata("6").then(function(response) {
  
 

 //alert(self.pdata[0].name+"dfsgdsfg");

           //console.log(response);
          self.prodListing = response ;
//$scope.fname = this.pdata[0].name;
          // alert(this.pdata[0].name);
         
       })

console.log(this.prodListing);
     
    
    this.showMe = false;
    this.showListing = true;

    this.searchproducts = $rootScope.srch;
  

    
}


	 prodListingCtrl.prototype.showMeSearch = function(){

			if(this.showMe == false){ 
				this.showMe = true;
			} else {
				this.showMe = false;
			}
		
    }

    prodListingCtrl.prototype.showMeSelect = function(){

    		if(this.showListing == false){ 
				this.showListing = true; 
			} else {
				this.showListing = false;
			}

    }

    prodListingCtrl.prototype.myclick = function(val){ 

        this.selectPrice = val;

    }


   prodListingCtrl.prototype.fetchDetail = function(Id){ 
   	alert(Id);
  this.state.go("product",{ pId:Id });

   }
   
    return prodListingCtrl;


})();


prodListingModule.controller('prodListingCtrl', prodListingCtrl);