(function() {
    'use strict';
    homeModule
        .config(function($stateProvider) {
            $stateProvider
                .state('app.home', {
                    cache:'false',
                    url: '/home',

                    views: {
                'menuContent' :{
                    templateUrl: 'components/Home/home.html'
                         }
            }
                })
        });
})();


                    
           