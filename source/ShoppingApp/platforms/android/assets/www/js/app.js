(function() {
    'use strict';

    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'

    angular.module('myApp', ['ionic', 'myApp.login', 'myApp.signup','myApp.home','myApp.menu','myApp.banner','myApp.product','myApp.prodListing','myApp.filter','myApp.ngMessages','myApp.cart','myApp.checkout'])

        .run(runApp)
        .config(configure)

     .directive('searchBar', [function () {
    return {
        scope: {
            ngModel: '='
        },
        require: ['^ionNavBar', '?ngModel'],
        restrict: 'E',
        replace: true,
        template: '<ion-nav-buttons side="right">'+
                        '<div class="searchBar">'+
                            '<div class="searchTxt" ng-show="ngModel.show">'+
                                '<div class="bgtxt">'+
                                    '<input type="text" placeholder="Search Products" >'+
                                '</div>'+
                            '</div>'+
                            '<i class="icon ion-ios-search" ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></i>'+
                        '<i class="icon ion-android-cart"></i>'+
                        '</div>'+
                    '</ion-nav-buttons>',
        
        compile: function (element, attrs) {
            var icon=attrs.icon
                    || (ionic.Platform.isAndroid() && 'ion-android-search')
                    || (ionic.Platform.isIOS()     && 'ion-ios7-search')
                    || 'ion-search';
            angular.element(element[0].querySelector('.icon')).addClass(icon);
            
            return function($scope, $element, $attrs, ctrls) {
                var navBarCtrl = ctrls[0];
                $scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;
                
            };
        }
  }
  }])  

    function configure($stateProvider , $urlRouterProvider, $ionicConfigProvider) {
        
        // Add initial config stuff here such as view caching refinements.
        $ionicConfigProvider.views.maxCache(10); // Default is 10 anyway.
        $urlRouterProvider.otherwise('/login'); // Default route for ui-router
    }

    function runApp($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
        // Initialize caching services if required (You need to add DSCacheFactory as an argument to runApp() to do this)
        // I sometimes have to initialize the cache within a factory/service as it is required immediately.
        // DSCacheFactory("codes", { storageMode: 'localStorage' });
    }

})();
