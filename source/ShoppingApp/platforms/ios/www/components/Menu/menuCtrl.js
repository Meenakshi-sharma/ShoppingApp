var menuCtrl;
//menuModule.$inject = [$state];
menuCtrl = (function($state ,$rootScope,$scope,$timeout, $ionicLoading, menuSrvc) {

    
    function menuCtrl($scope , $rootScope,  homeSrvc , $state,$timeout, $ionicLoading, menuSrvc) {
//console.log($scope); 
        this.state = $state ;
        this.menuSrvc= menuSrvc;
        var mycategories = {};
        var self = this;
        
        if(localStorage.getItem("customer_id")){
            self.username = localStorage.getItem("firstname");
        } else {
            self.username = "Guest";
        }

        $ionicLoading.show();
        self.menuSrvc.getCategories().then(function(response) {  console.log(response);
            menushowCat(response)
        }).finally(function(){
            $ionicLoading.hide();
        });

        var i = 0;

        function menushowCat(response){ //console.log('i'); console.log(response)
            if(response.length > 0 ){ 
                if(response[i]){
                    if(response[i].parent_id == 2){
                        mycategories[i] = response[i];
                        self.youcategories = mycategories;
                        //console.log("youcategories"); console.log(self.youcategories);
                    }

                    i++;
                    menushowCat(response);
                }
            }            
        }

        self.rootscope = $rootScope; 

           menuCtrl.prototype.getSub = function(index, position_id, category_id, category_name) { alert(index); //alert(category_id); alert(category_name);
console.log(self.youcategories);
var abc = self.youcategories; console.log(abc[0]); 

                     if (self.youcategories[index].children_count > 0){
                            self.state.go("app.home", {position_id:position_id});
                        } else {
                          self.state.go("app.prodListing", {'category_id':category_id, 'category_name':category_name});
                        }
                    }

            menuCtrl.prototype.nav = function(state) {
                self.state.go(state);
            }

    }
 

return menuCtrl;
    
})();



menuModule.controller('menuCtrl', menuCtrl);
