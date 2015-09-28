(function() {
    'use strict';

    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    angular.module('myApp', ['ionic', 'myApp.login', 'myApp.signup'])
        .run(runApp)
        .config(configure);

    function configure($urlRouterProvider, $ionicConfigProvider) {
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