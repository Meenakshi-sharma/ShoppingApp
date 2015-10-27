(function() {
    'use strict';
    productModule
        .config(function($stateProvider) {
            $stateProvider
                .state('product', {
                    url: '/product',
                    templateUrl: 'components/Product/product.html'
                })
        });
})();