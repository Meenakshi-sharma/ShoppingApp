var cartCtrl;

cartCtrl = (function($scope,$ionicSideMenuDelegate,$state, cartSrvc) {   
        function cartCtrl($scope,$ionicSideMenuDelegate,$state, cartSrvc, $ionicLoading) {
        
        this.state = $state;
        var self = this;
        
        if(localStorage.getItem("cartid") && localStorage.getItem("cartid") != '' && localStorage.getItem("cartid") != 'undefined'){
            var cartid = localStorage.getItem("cartid"); alert(cartid);   
           
            cartSrvc.getCartProducts(cartid).then(function(response) { console.log("cart response"); console.log(response);
                response.productlist[0].quantity = 1;
                    self.cartProducts = response.productlist;
                    self.cartProducts.subTotal = '$200';
                    self.cartProducts.total = '$200'; alert("HI");console.log(self.cartProducts);
                    self.quantity = 1;
             })
           
           cartSrvc.getCartTotal(cartid).then(function(response) {console.log("Cart Total"); console.log(response);
                    self.cartTotal = response; 
            })

             function updateCart(){
                
                 var options = {};
                
                if(self.pdata.optionid){
                    var options1 = {};
                    var options2 = {};
                    var options3 = {};
    
                    var opt = {};
                    for(i=0; i<self.pdata.optionid.length; i++){ 
                        var oid = self.pdata.optionid[i].option_id;
                        var ovalue = self.pdata.optionid[i].title;
                        
                        if(i == 0){
                            options1['key'] = oid;
                            options1['value'] = self.Color;
                        } else if(i == 1){
                            options2['key'] = oid;
                            options2['value'] = self.Manufacturer;
                            
                        } else if(i == 2){
                            options3['key'] = oid;
                            options3['value'] = self.Size;
                        }
                    }
                    
                    options = options1;
                    options = options2;
                    options = options3; console.log(options);
                
               } else {
                    options = null;
               }
               
                var products = {};
                 var response = {};
                products['product_id'] = self.productid;
                products['quantity'] = '1';
                products['sku'] = response.sku;
                products['options'] = options;
                products['bundle_option'] = null;
                products['bundle_option_qty'] = null;
                products['links'] = null;
                
                
                cartSrvc.updateCartProducts(products).then(function(response) {
                    self.cartProducts = response; 
                    self.quantity = 1; 
                })
             }
             
             
             cartCtrl.prototype.myquantity = function(product_id, type){
             
             
             if(!self.quantity){
                self.quantity = 1; 
             }
              
               var quantity = self.quantity;
                if(type == 1){
                    quantity = quantity + 1;
                }
                
                if(type == 0){
                    quantity = quantity - 1;
                }
                
                if(quantity < 1){
                    quantity = 1;
                }
                
                self.quantity = quantity;
                
                for(i=0; i<=self.cartProducts.length; i++ ){
                    if(self.cartProducts[i]){
                        if(self.cartProducts[i].product_id == product_id){
                            self.cartProducts[i].quantity = quantity;
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
                    }
                }  console.log("final array"); console.log( self.cartProducts);
            }
            
            cartCtrl.prototype.updateCart = function(){
                
                alert("UPdate Cart");   
                
            }
            
            
        } else { alert("cart id not");
            cartSrvc.showToastBanner("Your Cart Is Empty.", "short", "center");
        }
        
        
        cartCtrl.prototype.GoToCheckOut = function(){
                if(localStorage.getItem("customer_id") && localStorage.getItem("customer_id") != ''){
                    $state.go("app.checkout");
                } else {
                    $state.go("app.login");
                }
            }
     }

    return cartCtrl;
})();

cartModule.controller('cartCtrl', cartCtrl);

