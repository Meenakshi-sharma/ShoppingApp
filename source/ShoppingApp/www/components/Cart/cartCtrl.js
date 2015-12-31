var cartCtrl;

cartCtrl = (function($rootScope,$scope,$ionicSideMenuDelegate,$state, cartSrvc) {   
        function cartCtrl($rootScope, $scope,$ionicSideMenuDelegate,$state, cartSrvc, $ionicLoading) {
        
        this.state = $state;
        var self = this;
        
        $ionicLoading.show();

        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartTotal") != 'NaN' && localStorage.getItem("cartid") && localStorage.getItem("cartid") != 'NaN' ){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = 0;
        }
        
        if(localStorage.getItem("cartid") && localStorage.getItem("cartid") != '' && localStorage.getItem("cartid") != 'undefined'){
            var cartid = localStorage.getItem("cartid");// alert(cartid);   
           
            cartSrvc.getCartProducts(cartid).then(function(response) { console.log("cart response"); console.log(response);
                    self.cartProducts = response.products;

                    /*
                    if(localStorage.getItem("cartTotal") && localStorage.getItem("cartTotal") != 'NaN' && localStorage.getItem("cartid") && localStorage.getItem("cartid") != 'NaN' ){
                        
                        if(self.cartProducts){
                            self.cartTotal = self.cartProducts.length;
                            localStorage.setItem("cartTotal", self.cartTotal);
                        }else {
                            self.cartTotal = 0; 
                        }
                    } */
                    
                    var grandTotal = 0;
                    
                    if(self.cartProducts){
                        for(i=0; i<self.cartProducts.length;i++){
                            grandTotal = grandTotal+self.cartProducts[i].subTotal;
                        }
                        self.cartProducts.grandTotal = grandTotal;
                    }
                    
             }).finally(function(){
                $ionicLoading.hide();
            });

             function updateCart(){
                var customer_id = localStorage.getItem("customer_id");              
                console.log("Request data update product..");
                console.log(self.cartProducts); console.log(cartid); console.log(customer_id);
                cartSrvc.updateCartProducts(self.cartProducts, cartid, customer_id).then(function(response) {
                    console.log(response); alert(response.errorMsg);
                })
             }
             
             
             cartCtrl.prototype.myquantity = function(product_id, type){ alert(product_id);
             console.log(self.cartProducts);
             for(i=0; i<=self.cartProducts.length; i++){
                if(self.cartProducts[i].product_id == product_id){
                    var quantity = self.cartProducts[i].qty;  
                }
             }

                if(type == 1){
                    quantity = quantity + 1;
                }
                
                if(type == 0){
                    quantity = quantity - 1;
                }
                
                if(quantity < 1){
                    quantity = 1;
                }
                
                for(i=0; i<=self.cartProducts.length; i++){
                    if(self.cartProducts[i].product_id == product_id){
                        self.cartProducts[i].qty = quantity;  
                    }
                 }
                 

                
                var grandTotal = 0;
                for(i=0; i<=self.cartProducts.length; i++ ){
                    if(self.cartProducts[i]){
                        if(self.cartProducts[i].product_id == product_id){
                           self.cartProducts[i].quantity = quantity;
                           self.cartProducts[i].subTotal = self.cartProducts[i].price * self.cartProducts[i].quantity;
                           grandTotal = grandTotal + self.cartProducts[i].subTotal;
                           self.cartProducts.grandTotal = grandTotal;
                        }
                    }
                }
                
                return self.quantity;
            }
            
            
            cartCtrl.prototype.deleteProduct = function(product_id){
                for(i=0; i<=self.cartProducts.length; i++ ){
                    if(self.cartProducts[i]){
                        if(self.cartProducts[i].product_id == product_id){
                            self.cartProducts.splice(i,1);
                        }
                        self.cartProducts.total = '';
                    }
                }
                
                    var cartTotal = self.cartProducts.length;
                    localStorage.setItem("cartTotal", cartTotal);
                    self.cartTotal = cartTotal;
            }
            
            cartCtrl.prototype.updateCart = function(){
                updateCart();   
            }
            
            
        } else { alert("cart id not");
            $ionicLoading.hide();
            cartSrvc.showToastBanner("Your Cart Is Empty.", "short", "center");
        }
        
        
        cartCtrl.prototype.GoToCheckOut = function(){  console.log(localStorage.getItem("customer_id"));
            if(localStorage.getItem("customer_id") && localStorage.getItem("customer_id") != ''){
                $state.go("app.checkout");
            } else {
                $state.go("app.login",{ 'route': 'cart' });
            }
        }
            
        cartCtrl.prototype.clearShoppingCart = function(){
            var customer_id = localStorage.getItem("customer_id");              
            self.cartProducts = [];
            cartSrvc.updateCartProducts(self.cartProducts, cartid, customer_id).then(function(response) {
                console.log(response); alert(response.errorMsg);
            })
        }
     }

    return cartCtrl;
})();

cartModule.controller('cartCtrl', cartCtrl);

