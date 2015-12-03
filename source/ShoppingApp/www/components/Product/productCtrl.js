var productCtrl;

productCtrl = (function($rootScope,$scope,$state,productSrvc) {

    function productCtrl($rootScope,$scope,productSrvc,$state,$stateParams) {
    
           this.state = $state;
           var self = this;
           
            productSrvc.getData("1").then(function(response) {
                    self.pdata = response
                    self.productid = response.product_id;
             })
           
           productCtrl.prototype.addCart = function(id){
                var options = {};
                /*options[0]['key'] = 8;
                options[0]['value'] = 23;
                
                options[1]['key'] = 6;
                options[1]['value'] = 18;
                
                options[2]['key'] = 7;
                options[2]['value'] = 22; */
                
                var products = {};
                products['product_id'] = self.productid;
                products['quantity'] = 1;
                products['sku'] = '#2';
                products['options'] = options;
                products['bundle_option'] = null;
                products['bundle_option_qty'] = null;
                products['links'] = null;
                
                var customer = {};
                customer['customer_as_guest'] = false;
                customer['customer_id'] = localStorage.getItem('customer_id');
                
                this.state.go("app.cart");
                /*
                productSrvc.addToCart(products, customer).then(function(response) { console.log(response); alert("ad to cart respone");
                    this.state.go("app.cart");
                }); */
         }
         
         productCtrl.prototype.showMeSearch = function(searchproducts){
            window.localStorage['search'] = this.searchproducts;
            this.state.go("app.prodListing");
         }
    }

    

    return productCtrl;
})();

productModule.controller('productCtrl', productCtrl);

