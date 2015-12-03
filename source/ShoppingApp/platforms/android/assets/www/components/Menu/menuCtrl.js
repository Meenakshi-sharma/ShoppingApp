var menuCtrl;
//menuModule.$inject = [$state];
menuCtrl = (function($state ,$rootScope,$scope,$timeout) {

    
    function menuCtrl($scope , $rootScope,  homeSrvc , $state,$timeout) {
//console.log($scope); 
        this.state = $state ;
        this.homeSrvc= homeSrvc;
        this.scope = $scope;
        
        if(localStorage.getItem("customer_id")){
            this.username = localStorage.getItem("firstname");
        } else {
            this.username = "Guest";
        }

    //console.log(homeSrvc.children[0].children);
    this.categories = homeSrvc.children[0].children;
    
    
   this.rootscope = $rootScope; 
}


menuCtrl.prototype.getSub = function( cid) {


    var  listc = this.homeSrvc; 
    console.log("duckl");
    console.log(listc);
    console.log("duck2");
   
          window.localStorage['id'] = cid;
         if (listc.children[0].children[cid].children.length > 0){
this.state.go("app.home");

           } else {
          //window.localStorage['id'] = cid;
    this.state.go("app.prodListing"); }
        }
    
menuCtrl.prototype.LogOut = function() {
    localStorage.setItem("email", '');
    localStorage.setItem("firstname", '');
    localStorage.setItem("lastname", '');
    localStorage.setItem("customer_id", '');
    alert("You Logout Successfully");
    this.state.go("login");
    return;
}
    

return menuCtrl;
    
})();



menuModule.controller('menuCtrl', menuCtrl);
