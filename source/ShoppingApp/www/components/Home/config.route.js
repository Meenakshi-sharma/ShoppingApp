(function() {
    'use strict';
    homeModule
        .config(function($stateProvider) {
            $stateProvider
                .state('app.home', {
                    url: '/home:id',

                    views: {
                'menuContent' :{
                    templateUrl: 'components/Home/home.html'
                         }
            }
                })
        });
})();


                    
           