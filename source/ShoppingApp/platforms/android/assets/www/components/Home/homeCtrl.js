var homeCtrl;

homeCtrl = (function($rootScope,$scope,$ionicSideMenuDelegate,$state, $ionicLoading) {

    function homeCtrl($rootScope,$stateParams, $scope,menuSrvc,$ionicSideMenuDelegate,$state, $ionicLoading) {
        $ionicLoading.show();

       this.showMe = true;
       this.state = $state;
       this.rootScope = $rootScope;
       var self = this;

        if(localStorage.getItem("cartTotal") && localStorage.getItem("cartid")){
            this.cartTotal = localStorage.getItem("cartTotal");    
        } else {
            this.cartTotal = 0;
        }
        
        if($stateParams.category_id){
            var category_id = $stateParams.category_id;
        } else {
            var category_id = 1;
        }

       self.categoryHeading = $stateParams.category_name;
var myarray = [];
       menuSrvc.getCategories().then(function(response) {
         
            for(i=0; i<response.length; i++){ 
                if(response[i].parent_id == category_id){
                    myarray.push(response[i]);
                    
                }
            } 
        }).finally(function(){ 
            self.category = myarray; console.log(myarray);
            $ionicLoading.hide();
        });
     }

     homeCtrl.prototype.showMeSearch = function(searchproducts){
        this.rootScope.srch = this.searchproducts;
        this.state.go("app.prodListing");
     }

     homeCtrl.prototype.showProducts = function(category_id, category_name){
        this.state.go("app.prodListing",{ category_id:category_id, category_name:category_name });
    }
       
    return homeCtrl;
})();

homeModule.controller('homeCtrl', homeCtrl);

