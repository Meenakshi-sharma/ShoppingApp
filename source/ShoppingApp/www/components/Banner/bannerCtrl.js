var bannerCtrl;

bannerCtrl = (function($rootScope, $scope,$ionicSideMenuDelegate,$state) {
    function bannerCtrl($rootScope,$scope,bannerSrvc,$ionicSideMenuDelegate,$state) {

       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;
        
        var self = this;
        
      
        bannerSrvc.getBdata().then(function(response) {
            self.category = response.banners;
        });
       
        bannerSrvc.getBdataSecond().then(function(response) { console.log("New Products");console.log(response);
            self.categoryBanners = response ;
        });
        
        bannerSrvc.getBdataSpecial().then(function(response) {  console.log("Special Products");console.log(response);
            self.categoryBannersSpecial = response ;
        });
        
        bannerCtrl.prototype.showMeSearch = function($rootScope,searchproducts){

            this.rootScope.srch = this.searchproducts;
        
            this.state.go("app.prodListing");
          
        } 
        
        bannerCtrl.prototype.fetchDetail = function(product_id){
   
            this.state.go("app.product",{ 'product_id':product_id });
        
           }
    }
    return bannerCtrl;
})();

bannerModule.controller('bannerCtrl', bannerCtrl);

