(function() {
    'use strict';
    checkoutModule
        .config(function($stateProvider) {
            $stateProvider
                .state('app.checkout', {
                    url: '/checkout',

                    views: {
                'menuContent' :{
                    templateUrl: 'components/Checkout/checkout.html'
                         }
            }
                })
        .state('app.payment', {
                    url: '/payment',

                    views: {
                'menuContent' :{
                    templateUrl: 'components/Checkout/payment.html'
                         }
            }
                })

        });




})();


                    
           