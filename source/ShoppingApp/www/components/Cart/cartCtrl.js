var cartCtrl;

cartCtrl = (function($scope,$ionicSideMenuDelegate,$state, cartSrvc) {

    function cartCtrl($scope,$ionicSideMenuDelegate,$state, cartSrvc) {
        
        this.state = $state;
        var self = this;
           
           
       cartSrvc.getCartProducts("47").then(function(response) {
                self.cartProducts = response; 
         })
       
       cartSrvc.getCartTotal("47").then(function(response) { console.log(response);
                self.cartTotal = response; 
         })
         
         cartCtrl.prototype.myquantity = function(type){ alert("type= "+ type);
           var quantity = 1;
            if(type == 1){
                quantity = self.quantity + 1;
            }
            
            if(type == 0){
                quantity = self.quantity - 1;
            }
            
            if(quantity < 1){
                quantity = 1;
            } alert("self.quantity= "+ self.quantity);
            return self.quantity = quantity;
        }

     }

     
       
    

    return cartCtrl;
})();

cartModule.controller('cartCtrl', cartCtrl);

