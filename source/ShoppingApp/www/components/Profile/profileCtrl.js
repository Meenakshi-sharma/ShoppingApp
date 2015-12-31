var profileCtrl;

profileCtrl = (function($state, $stateParams,$rootScope, $scope, profileSrvc, bannerSrvc) {

    function profileCtrl($state, $stateParams,$rootScope, $scope, profileSrvc, bannerSrvc) {
        
       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;
        
        var self = this;
        
        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartid")){
            self.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            self.cartTotal = 0;
        }
        
        profileSrvc.getProfile().then(function(response) { console.log("Hello"); console.log(response);
            self.profileInfo = response;
        });

        bannerSrvc.getBdataSpecial().then(function(response) { console.log(response);
            self.categoryBannersSpecial = response;
        }).finally(function(){
            $ionicLoading.hide();
        });
    }

    return profileCtrl;
})();

profileModule.controller('profileCtrl', profileCtrl);
