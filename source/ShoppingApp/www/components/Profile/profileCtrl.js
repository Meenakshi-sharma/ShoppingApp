var profileCtrl;

profileCtrl = (function($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading, $ionicPopup) {

    function profileCtrl($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading, $ionicPopup) {
    
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
        
        profileSrvc.getProfile(customer_id).then(function(response) { console.log("profile response"); console.log(response);
            if(response.success == 1){
                self.profileInfo = response.data;
            } else {
                cartSrvc.showToastBanner("Server Error occcurs.", "short", "center");
                return;
            }
            
        }).finally(function(){
            $ionicLoading.hide();
        });
//Update Account Information....
        profileCtrl.prototype.showPopup = function() {
          // An elaborate, custom popup
          var myPopup = $ionicPopup.show({
            template: '<div class="list"> <label class="item item-input item-floating-label"> <span class="input-label">First Name</span> <input type="text" placeholder="First Name" ng-model="pl.profileInfo.customer_profile_info.firstname"> </label>  <label class="item item-input item-floating-label"> <span class="input-label">Last Name</span> <input type="text" placeholder="Last Name" ng-model="pl.profileInfo.customer_profile_info.lastname"></label> <label class="item item-input item-floating-label"> <span class="input-label">Email</span> <input type="text" placeholder="Email" ng-model="pl.profileInfo.customer_profile_info.email"> </label></div>',
            title: 'Edit Account Information',
           
            scope: $scope,
            buttons: [
              { text: 'Cancel' },
              {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) { console.log($scope);
                 
                    var firstname = self.profileInfo.customer_profile_info.firstname;
                    var lastname = self.profileInfo.customer_profile_info.lastname;
                    var email = self.profileInfo.customer_profile_info.email;

                    if(!firstname){
                        cartSrvc.showToastBanner("Please enter firstname.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    if(!lastname){
                        cartSrvc.showToastBanner("Please enter lastname.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    if(!email){
                        cartSrvc.showToastBanner("Please enter email.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    if(email){
                         var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                         if(!re.test(email)){
                           cartSrvc.showToastBanner('Please Enter Your Valid Email', "short", "center");
                           e.preventDefault();
                           return;
                         }
                     }

                     profileSrvc.updateProfile(customer_id, firstname, lastname, email).then(function(response) {
                        if(response.success == 1){
                            cartSrvc.showToastBanner("Form submitted successfully.", "short", "center");
                            return;
                        } else {
                            cartSrvc.showToastBanner(response.msg, "short", "center");
                            return;
                        }
                        
                    });
                    
                }
              }
            ]
          });
        }

        profileCtrl.prototype.showBillingPopup = function(x) {
            console.log(x); console.log(x.city);

            var myPopupBilling = $ionicPopup.show({
            template: '<div class="list"> <label class="item item-input item-floating-label"> <span class="input-label">First Name</span><input type="text" ng-model="pl.profileInfo.addresses[0].firstname" name="firstname" placeholder="First Name" ng-minlength="3" ng-maxlength="15" required/>  </label> <label class="item item-input item-floating-label"> <span class="input-label">Last Name</span> <input type="text" ng-model="pl.profileInfo.addresses[0].lastname" name="lastname" placeholder="Last Name" ng-minlength="3" ng-maxlength="15" required /> </label><label class="item item-input item-floating-label"><span class="input-label">City/Town</span> <input type="text" ng-model="pl.profileInfo.addresses[0].city" name="city"  placeholder="City/Town"/></label><label class="item item-input item-floating-label"> <span class="input-label">State</span><input type="text" ng-model="pl.profileInfo.addresses[0].region" name="region"  placeholder="State"/></label><input type="hidden" ng-model="pl.profileInfo.addresses[0].country_id" name="country_id"/><!--  <label class="item item-input item-select"> <div class="input-label"> Country </div><select name="countary_name" ng-init="cpl.profileInfo.addresses[0].country_id = pl.profileInfo.addresses[0].country_id" ng-model="pl.profileInfo.addresses[0].country_id" style="right:5px;" ng-options="pl.profileInfo.addresses[0].country_id as pl.profileInfo.addresses[0].name for x in pl.profileInfo.addresses[0].country_list"></select></label> --> <label class="item item-input item-floating-label"> <span class="input-label">Pin Code</span> <input type="text" ng-model="pl.profileInfo.addresses[0].postcode" name="postcode" placeholder="Pin Code"/>  </label> <label class="item item-input item-floating-label"> <span class="input-label">Phone Number</span><input type="number" ng-model="pl.profileInfo.addresses[0].telephone" name="telephone"  placeholder="Phone Number"/> </label> </div>',
            title: 'Edit Billing Information',
           
            scope: $scope,
            buttons: [
              { text: 'Cancel' },
              {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) { console.log($scope);
                 
                    var firstname = x.firstname;
                    var lastname = x.lastname;
                    var street1 = "test";
                    var street2 = "test";
                    var city = x.city;
                    var region = x.region;
                    var country_id = x.country_id;
                    var country_name = "test";
                    var postcode = x.postcode;
                    var telephone = x.telephone;

                    if(!firstname){
                        cartSrvc.showToastBanner("First Name is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(firstname.length < 3){
                        cartSrvc.showToastBanner("First Name is too short.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(firstname > 16){
                        cartSrvc.showToastBanner("First Name too long.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(lastname > 16){
                        cartSrvc.showToastBanner("Last Name is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    
                    if(!street1){
                        cartSrvc.showToastBanner("Address is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(!street2){
                        cartSrvc.showToastBanner("Address 2 is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(!city){
                        cartSrvc.showToastBanner("City is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(!region){
                        cartSrvc.showToastBanner("State is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    
                    if(!country_name){
                        cartSrvc.showToastBanner("Country is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(!postcode){
                        cartSrvc.showToastBanner("Pincode is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }

                    if(!telephone){
                        cartSrvc.showToastBanner("Phone Number is required.", "short", "center");
                        e.preventDefault();
                        return;
                    }
                    billingDetails = {
                        'firstname': firstname,
                        'lastname': lastname,
                        'street1': street1,
                        'street2': street2,
                        'city': city,
                        'region_id':'0',
                        'region': region,
                        "country_id":country_id,
                        "country_name":country_name,
                        'postcode': postcode,
                        'telephone': telephone
                    }

                     profileSrvc.updateBillingAddress(customer_id, addressId, billingDetails).then(function(response) { console.log(response);
                        if(response.success == 1){
                            cartSrvc.showToastBanner("Form submitted successfully.", "short", "center");
                            return;
                        } else {
                            cartSrvc.showToastBanner(response.msg, "short", "center");
                            return;
                        }
                        
                    });
                    
                }
              }
            ]
          });

            for(i=0; i<self.profileInfo.addresses; i++){
                if(self.profileInfo.addresses[i].customer_address_id == x.customer_address_id){
                    $scope.billingData = x;
                }
            }
        }
    }

    return profileCtrl;
})();

profileModule.controller('profileCtrl', profileCtrl);
