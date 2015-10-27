var prodListingCtrl;



prodListingCtrl = (function($state) {
	


	//var shwoMe = (showMe == false)? true:false ;

    function prodListingCtrl(prodListingSrvc, $state) {
    //console.log(this);
	this.state = $state ;
	this.prodListing = prodListingSrvc;
	//console.log(this.prodListing);
     // return(this.prodListing); 
    
    this.showMe = false;
    this.showListing = true;


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

    return prodListingCtrl;


})();


prodListingModule.controller('prodListingCtrl', prodListingCtrl);