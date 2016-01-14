var orderDetailCtrl;

orderDetailCtrl = (function($state,$rootScope, $stateParams, $scope, profileSrvc, $ionicLoading) {

    function orderDetailCtrl($state,$rootScope, $stateParams, $scope, profileSrvc, $ionicLoading) {
       
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
    
        var orderId = $stateParams.orderId;
        
        if(orderId){
            profileSrvc.getMyOrderDetail(orderId).then(function(response) { console.log("order details response"); console.log(response);
                self.orderDetail = response.order[0];
                $ionicLoading.hide();
            });
        } else {
            $ionicLoading.hide();
        }
    }

    return orderDetailCtrl;
})();

profileModule.controller('orderDetailCtrl', orderDetailCtrl);
