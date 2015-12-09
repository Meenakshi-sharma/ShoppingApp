var checkoutCtrl;

checkoutCtrl = (function($scope,$ionicSideMenuDelegate,$state, cartSrvc) {

    function checkoutCtrl($scope,$state,cartSrvc) { console.log("$scope"); console.log($scope);
        
        this.state = $state;
        var self = this;
        var BillingDetails = {};
        var ShippingDetails = {};
        var PaymentDetails = {};
         
         if(localStorage.getItem("cartid") && localStorage.getItem("cartid") != '' && localStorage.getItem("cartid") != 'undefined'){
            var cartid = localStorage.getItem("cartid");
           
            cartSrvc.getCartProducts(cartid).then(function(response) {
                    response.productlist[0].quantity = 1;
                    response.productlist[0].price = 130;
                    response.productlist[0].subTotal = 130;
                    
                    self.cartProducts = response.productlist;
                    
                    var grandTotal = 0;
                    for(i=0; i<self.cartProducts.length;i++){
                        grandTotal = grandTotal+self.cartProducts[i].subTotal;
                    }
                    self.cartProducts.total = grandTotal;
                    self.quantity = 1;
             })            
        }
         
         checkoutCtrl.prototype.GoToNav = function(route){
            $state.go("app."+route);
         }
//Checkout.html Billing Infomation
         checkoutCtrl.prototype.BillingInfo = function(){
            var name = self.checkout.name;
            var address1 = self.checkout.address1;
            var address2 = self.checkout.address2;
            var city = self.checkout.city;
            var state = self.checkout.state;
            var country = self.checkout.country;
            var pincode = self.checkout.pincode;
            var phone = self.checkout.phone;
            
            BillingDetails = {
                'name': name,
                'address1': address1,
                'address2': address2,
                'city': city,
                'state': state,
                'country': country,
                'pincode': pincode,
                'phone': phone
            }
            localStorage.setItem("BillingDetails", BillingDetails);
            $state.go("app.shipping");
         }
 //Shipping.html Shipping Infomation        
         checkoutCtrl.prototype.ShippingInfo = function(){
            var name = self.shipping.name;
            var address1 = self.shipping.address1;
            var address2 = self.shipping.address2;
            var city = self.shipping.city;
            var state = self.shipping.state;
            var country = self.shipping.country;
            var pincode = self.shipping.pincode;
            var phone = self.shipping.phone;
            
            ShippingDetails = {
                'name': name,
                'address1': address1,
                'address2': address2,
                'city': city,
                'state': state,
                'country': country,
                'pincode': pincode,
                'phone': phone
            }
            
            localStorage.setItem("ShippingDetails", ShippingDetails);
            
            $state.go("app.payment");
         }
         
 //Payment.html Payment Infomation
        checkoutCtrl.prototype.PaymentInfo = function(BillingDetails){
            var card = self.payment.card;
            
            
            PaymentDetails = {
                'card': card
            }
            //localStorage.setItem("cartid", '');
            
            var BillingDetails = localStorage.getItem("BillingDetails");
            var ShippingDetails = localStorage.getItem("ShippingDetails");
            
            console.log(BillingDetails);
            console.log(ShippingDetails);
            console.log(PaymentDetails);
            
            $state.go("app.success");
         }
     }  
    

    return checkoutCtrl;
})();

checkoutModule.controller('checkoutCtrl', checkoutCtrl);

