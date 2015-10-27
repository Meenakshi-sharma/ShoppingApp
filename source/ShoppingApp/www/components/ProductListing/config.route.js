(function() {
    'use strict';

    prodListingModule
        .config(function($stateProvider) {

            $stateProvider
                .state('prodListing', {
                    url: '/prodListing',
                    templateUrl: 'components/ProductListing/prodListing.html',
                    controller: 'prodListingCtrl as pc'
                })
        });
})();