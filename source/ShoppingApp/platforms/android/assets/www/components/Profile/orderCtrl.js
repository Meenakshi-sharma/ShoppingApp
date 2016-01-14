var orderCtrl;

orderCtrl = (function($state,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {

    function orderCtrl($state,$rootScope, $scope, profileSrvc, cartSrvc, $ionicLoading) {
    
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
    
        profileSrvc.getMyOrder(customer_id).then(function(response) { console.log("order response"); console.log(response);
            if(response.success == 1 && response.orders.length > 0){
                self.orderInfo = response.orders;
               
            } else {
                cartSrvc.showToastBanner("No Record Found.", "long", "center");
                return;
            }
            
        }).finally(function(){
            $ionicLoading.hide();
        });

        orderCtrl.prototype.OrderDetail = function(orderId){
            if(orderId){
               this.state.go("app.myorderdetail",{'orderId':orderId});
            }
            
        }
    }

    return orderCtrl;
})();

profileModule.controller('orderCtrl', orderCtrl);
