var checkoutCtrl;

checkoutCtrl = (function($scope,$ionicSideMenuDelegate,$state, cartSrvc) {

    function checkoutCtrl($scope, cartSrvc) {
         cartSrvc.getCartProducts("47").then(function(response) {
                self.cartProducts = response; 
                self.quantity = 1;
         })
         
         productCtrl.prototype.GoToNav = function(route){ alert(route);
            $scope.go("app."+route);
         }
     }      
    

    return checkoutCtrl;
})();

checkoutModule.controller('checkoutCtrl', checkoutCtrl);

