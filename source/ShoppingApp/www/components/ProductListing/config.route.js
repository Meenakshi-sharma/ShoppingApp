(function() {
    'use strict';

    prodListingModule
        .config(function($stateProvider) {

            $stateProvider
                .state('app.prodListing', {
                    cache: 'false',
                    url: '/prodListing',
                    views: {
                'menuContent' :{
                    templateUrl: 'components/ProductListing/prodListing.html'
                         }
            },
                    
                })
        });
})();