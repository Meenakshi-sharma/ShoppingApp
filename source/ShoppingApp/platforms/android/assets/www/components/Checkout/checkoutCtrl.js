var checkoutCtrl;

checkoutCtrl = (function($scope,$ionicSideMenuDelegate,$state, cartSrvc, checkoutSrvc, $ionicLoading) {

    function checkoutCtrl($scope,$state,cartSrvc, checkoutSrvc, $ionicLoading) { console.log("$scope"); console.log($scope);
        
        $ionicLoading.show();

        this.state = $state;
        var self = this;
        var BillingDetails = {};
        var ShippingDetails = {};
        var PaymentDetails = {};
        
        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartid")){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = 0;
        }
         
         if(localStorage.getItem("cartid") && localStorage.getItem("cartid") != '' && localStorage.getItem("cartid") != 'undefined'){
            var cartid = localStorage.getItem("cartid");
           
            cartSrvc.getCartProducts(cartid).then(function(response) {
                if(response.productlist){
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
                }
                    
             });
        }

        var customerId = localStorage.getItem("customer_id");

        checkoutSrvc.getUserShippingData(customerId, cartid).then(function(response) { console.log(" shipping....");console.log(response);
                    self.shipping = {};
                    self.shipping.fname = response.shipping.firstname;
                    self.shipping.lname = response.shipping.lastname;
                    self.shipping.address1 = response.shipping.street1;
                    self.shipping.address2 = response.shipping.street2;
                    self.shipping.city = response.shipping.city;
                    self.shipping.state = response.shipping.region;
                    self.shipping.countary = response.shipping.country_name;
                    self.shipping.pincode = response.shipping.postcode;
                    self.shipping.phone = response.shipping.telephone;
             });

        checkoutSrvc.getUserBillingData(customerId, cartid).then(function(response) { console.log(" billing....");console.log(response);
                    self.billing = {};
                    self.billing.fname = response.shipping.firstname;
                    self.billing.lname = response.shipping.lastname;
                    self.billing.address1 = response.shipping.street1;
                    self.billing.address2 = response.shipping.street2;
                    self.billing.city = response.shipping.city;
                    self.billing.state = response.shipping.region;
                    self.billing.countary = response.shipping.country_name;
                    self.billing.pincode = response.shipping.postcode;
                    self.billing.phone = response.shipping.telephone;
             });

        checkoutSrvc.getUserCheckoutMethods().then(function(response) { console.log(" payment....");console.log(response);


        });

         $ionicLoading.hide();   
         
         checkoutCtrl.prototype.GoToNav = function(route){
            $state.go("app."+route);
         }
//Checkout.html Billing Infomation
         checkoutCtrl.prototype.BillingInfo = function(){
            var fname = self.billing.fname;
            var address1 = self.billing.address1;
            var address2 = self.billing.address2;
            var city = self.billing.city;
            var state = self.billing.state;
            var country = self.billing.country;
            var pincode = self.billing.pincode;
            var phone = self.billing.phone;
            
            billingDetails = {
                'name': fname,
                'address1': address1,
                'address2': address2,
                'city': city,
                'state': state,
                'country': country,
                'pincode': pincode,
                'phone': phone
            }
            
            $ionicLoading.show(); console.log("billing d");console.log(billingDetails);
            checkoutSrvc.updateUserBillingData(customerId, billingDetails).then(function(response) {
               console.log("billing update"); console.log(response);
            }).finally(function(){
                $ionicLoading.hide();
                $state.go("app.shipping");
            });
         }
//Shipping.html Shipping Infomation
         checkoutCtrl.prototype.ShippingInfo = function(){
            var fname = self.shipping.fname;
            var address1 = self.shipping.address1;
            var address2 = self.shipping.address2;
            var city = self.shipping.city;
            var state = self.shipping.state;
            var country = self.shipping.country;
            var pincode = self.shipping.pincode;
            var phone = self.shipping.phone;
            
            shippingDetails = {
                'name': fname,
                'address1': address1,
                'address2': address2,
                'city': city,
                'state': state,
                'country': country,
                'pincode': pincode,
                'phone': phone
            }
            
            $ionicLoading.show(); console.log("shipping d");console.log(shippingDetails);
            checkoutSrvc.updateUserShippingData(customerId, shippingDetails).then(function(response) {
               console.log("shipping update"); console.log(response);
            }).finally(function(){
                $ionicLoading.hide();
                $state.go("app.payment");
            });
            
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

