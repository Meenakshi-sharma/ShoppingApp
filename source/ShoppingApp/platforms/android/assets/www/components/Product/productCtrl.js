var productCtrl;

productCtrl = (function($rootScope,$scope,$state,productSrvc, $ionicSideMenuDelegate) {

    function productCtrl($rootScope,$scope,productSrvc,$state,$stateParams, $ionicSideMenuDelegate, $ionicLoading) {
            
            if($stateParams.product_id){
                var product_id = $stateParams.product_id;
            } else {
                var product_id = 1;
            }
            
           this.state = $state;
           var self = this;
           
            productSrvc.getData(product_id).then(function(response) { console.log(response);
                
                    self.pdata = response;
                    self.productid = response.product_id;
                    if(self.pdata.special_price){
                        self.discount = (1 - (self.pdata.special_price / self.pdata.price)) * 100;
                    }
                    
             })
           
           productCtrl.prototype.addCart = function(id){
                $scope.options = [];
                // console.log("selft"); console.log(self);
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
                        $scope.options.push(options1);
                    } else if(i == 1){
                        options2['key'] = oid;
                        options2['value'] = self.Manufacturers;
                        $scope.options.push(options2);
                        
                    } else if(i == 2){
                        options3['key'] = oid;
                        options3['value'] = self.Size;
                        $scope.options.push(options3);
                    }
                }
                
                //options = {[options1], [options2], [options3]};
                
               } else {
                $scope.options = null;
               }
               //console.log($scope.options);
                var products = {};
                 var request = {};
                products['product_id'] = self.pdata.product_id;
                products['quantity'] = '1';
                products['sku'] = self.pdata.sku;
                products['options'] = $scope.options;
                products['bundle_option'] = null;
                products['bundle_option_qty'] = null;
                products['links'] = null;
                
                var products1 = [products];
                
                var customer = {};
                customer['customer_as_guest'] = false;
                customer['customer_id'] = localStorage.getItem('customer_id');
                if(localStorage.getItem("cartid") && localStorage.getItem("cartid") != '' && localStorage.getItem("cartid") != 'undefined'){
                    var cartid = localStorage.getItem("cartid");
                } else {
                    var cartid = null;
                } 
                
                request["products"]= products1;
                request["customer"]= customer;
                request["shopping_cart_id"]= cartid;
                console.log(self.pdata);
                console.log(request);

                productSrvc.addToCart(request).then(function(response) { console.log(response);
                    localStorage.setItem("cartid", response.cart_id);
                  
                   alert("Product is add to cart successfully.");
                }); 
         }
         
         productCtrl.prototype.showMeSearch = function(searchproducts){
            window.localStorage['search'] = this.searchproducts;
            this.state.go("app.prodListing");
         }
         
         productCtrl.prototype.fetchDetail = function(product_id){
            this.state.go("app.product",{ 'product_id':product_id });
         }
    }

    return productCtrl;
})();

productModule.controller('productCtrl', productCtrl);

