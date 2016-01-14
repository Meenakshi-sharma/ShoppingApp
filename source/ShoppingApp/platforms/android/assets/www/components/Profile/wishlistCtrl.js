var wishlistCtrl;

wishlistCtrl = (function($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {

    function wishlistCtrl($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {
        $ionicLoading.show();
       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;
        
        var self = this;

        var customer_id = localStorage.getItem('customer_id');
        
        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartid")){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = 0;
        }
        
        profileSrvc.getWishlist(customer_id).then(function(response) { console.log("wishlist response"); console.log(response);
            if(response.success == 1 && response.wish_list_data.length > 0){
                self.wishlist = response.wish_list_data;
            } else {
                cartSrvc.showToastBanner("No Record Found.", "long", "center");
                return;
            }
        }).finally(function(){
            $ionicLoading.hide();
        });
//Remove Products from wishlist
        wishlistCtrl.prototype.RemoveFromWishlist = function(index, product_id){
            if(product_id){
                self.wishlist.splice(index,1);
               profileSrvc.removeWishlistItem(product_id).then(function(response) { console.log("remove profuct from wishlist response"); console.log(response);
                    //self.wishlist = response.wish_list;
                });
            }
        }
//Add TO cart product
        wishlistCtrl.prototype.AddToCart = function(product_id){
            if(product_id){
               this.state.go("app.product",{'product_id':product_id});
            }
        }
    }

    return wishlistCtrl;
})();

profileModule.controller('wishlistCtrl', wishlistCtrl);
