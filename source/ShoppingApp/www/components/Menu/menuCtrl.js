var menuCtrl;
//menuModule.$inject = [$state];
menuCtrl = (function($state ,$rootScope,$scope,$timeout) {

    
    function menuCtrl($scope , $rootScope,  homeSrvc , $state,$timeout) {
//console.log($scope); 
this.state = $state ;
//this.menuSrvc = menuSrvc;
//console.log(menuSrvc);
//this.categories = menuSrvc;
// this.subcat = []; 
this.scope = $scope;

console.log("duckl");
   
        console.log(homeSrvc.children[0].children);
        this.categories = homeSrvc.children[0].children;
    
    console.log("duck2");
   this.rootscope = $rootScope; 
/*$scope.$on('$ionicView.afterEnter', function(){
console.log("menu cloes");

});*/
}


menuCtrl.prototype.getSub = function( cid) {


    var  listc = this.homeSrvc; 
    console.log("duckl");
    console.log(listc);
    console.log("duck2");
    //console.log(cid);


<<<<<<< Updated upstream
   // for(var i=0; i<= listc.length ; i++){

       // if ( listc[i].id === parseInt(cid) )
       // { 

          //  console.log(listc[i].Subcategories);
          //  this.subcat =  listc[i].Subcategories ;
           //return (this.subcat);
          window.localStorage['id'] = cid;
    //this.state.go("app.home");
   //this.rootscope.$broadcast('scanner-started',cid);
        this.state.go("app.home", cid);
    //}
=======
            console.log(listc[i].Subcategories);
            this.subcat =  listc[i].Subcategories ;
           return (this.subcat);
          
    this.state.go("app.home");
        }
    }
>>>>>>> Stashed changes
 
    }
    //this.state.go("app.home", cid);
    //console.log(listc.indexOf(id));


return menuCtrl;
    
})();



menuModule.controller('menuCtrl', menuCtrl);
