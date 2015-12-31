var bannerCtrl;

bannerCtrl = (function($rootScope, $scope,$ionicSideMenuDelegate,$state, $ionicLoading, $ionicHistory, homeSrvc, prodListingSrvc, cartSrvc) {
    function bannerCtrl($rootScope,$scope,bannerSrvc,$ionicSideMenuDelegate,$state, $ionicLoading, $ionicHistory, homeSrvc, prodListingSrvc, cartSrvc) {

       this.state = $state;
       this.scope = $scope;
       this.rootScope = $rootScope;
       this.showProfile = false;
        
        var self = this;

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          disableBack: true
        });
        
        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartTotal") != 'NaN' && localStorage.getItem("cartid") && localStorage.getItem("cartid") != 'NaN' ){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = '0';
        }
            $ionicLoading.show();
            this.scope.hide();
            this.categories = homeSrvc.children[0].children;

            var prodCatListing = {};

            var i = 0;

            if(i < this.categories.length){
                showCat(this.categories);
            }

            function showCat(categories){ //console.log(i); //console.log(categories)
                if(categories[i]){
                prodListingSrvc.getCdata(categories[i].category_id).then(function(response) {
                        //response[i].category_name = this.categories[i].name;
                        if(response.length > 0 ){ 
                            if(categories[i]){
                                prodCatListing[i] = response;
                                prodCatListing[i].name = categories[i].name;
                                prodCatListing[i].category_id = categories[i].category_id;
                                self.prodCatListing = prodCatListing;
                            }
                        }

                        i++;

                        showCat(categories);
                    });
                }
            }

            bannerSrvc.getBdata().then(function(response) {
                self.category = response.banners;
            });
           
            bannerSrvc.getBdataSecond().then(function(response) {
                self.categoryBanners = response;
            });

            bannerSrvc.getBdataSpecial().then(function(response) {
                self.categoryBannersSpecial = response;
            }).finally(function(){
                this.scope.show();
                $ionicLoading.hide();
            });

        bannerCtrl.prototype.goToCart = function(product_id){
            if(self.cartTotal > 0){
                this.state.go("app.cart");
            } else {
                cartSrvc.showToastBanner("Cart is empty.", "short", "center");
            }
            
        }

        bannerCtrl.prototype.fetchDetail = function(product_id){
   
            this.state.go("app.product",{ 'product_id':product_id });
        
           }
        bannerCtrl.prototype.hideProf = function(){

            this.showProfile = false;
        
        }

        bannerCtrl.prototype.showMeProfile = function(){

            if(this.showProfile == false){
                this.showProfile = true;
            } else {
                this.showProfile = false;
            }
        
         }

        bannerCtrl.prototype.getSub = function(category_id, category_name) {
            this.state.go("app.prodListing", {'category_id':category_id, 'category_name':category_name});
        }
    }
    return bannerCtrl;
})();

bannerModule.controller('bannerCtrl', bannerCtrl);

