var homeCtrl;

homeCtrl = (function($rootScope,$scope,$ionicSideMenuDelegate,$state) {

    function homeCtrl($rootScope,$scope,homeSrvc,$ionicSideMenuDelegate,$state) {


       
       console.log(homeSrvc.children[0].children);
       this.category = homeSrvc.children[0].children[window.localStorage['id']]; 
       this.mcat = homeSrvc.children[0].children[window.localStorage['id']].name ; 
       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;

     }

     homeCtrl.prototype.showMeSearch = function(searchproducts){

        this.rootScope.srch = this.searchproducts;
    
        this.state.go("app.prodListing");

     }
       
    

    return homeCtrl;
})();

homeModule.controller('homeCtrl', homeCtrl);

