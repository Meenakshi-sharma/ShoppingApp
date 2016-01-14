var profileCtrl;

profileCtrl = (function($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {

    function profileCtrl($state, $stateParams,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {
    
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
    }

    return profileCtrl;
})();

profileModule.controller('profileCtrl', profileCtrl);
