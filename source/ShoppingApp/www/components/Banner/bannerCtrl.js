var bannerCtrl;

bannerCtrl = (function($rootScope, $scope,$ionicSideMenuDelegate,$state) {
    function bannerCtrl($rootScope,$scope,bannerSrvc,$ionicSideMenuDelegate,$state) {

       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;
        
        var self = this;
      
        bannerSrvc.getBdata().then(function(response) { //alert("d");
            self.category = response ;
        });
       
        bannerSrvc.getBdataSecond().then(function(response) { //alert("mybanner"); console.log(response);
            self.categoryBanners = response ;
        });
        
        bannerSrvc.getBdataSpecial().then(function(response) {// alert("mybanner"); console.log(response);
            self.categoryBannersSpecial = response ;
        });

    }


      bannerCtrl.prototype.showMeSearch = function($rootScope,searchproducts){

        console.log(this.searchproducts);

        this.rootScope.srch = this.searchproducts;
    
        this.state.go("app.prodListing");
        
      
    } 
     
    return bannerCtrl;
})();

bannerModule.controller('bannerCtrl', bannerCtrl);

