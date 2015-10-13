var menuCtrl;
//menuModule.$inject = [$state];
menuCtrl = (function($state) {

    
    function menuCtrl(menuSrvc , $state) {
console.log($state); 
this.state = $state ;
this.menuSrvc = menuSrvc;
console.log(menuSrvc);
this.categories = menuSrvc;
 this.subcat = [];  

    }
menuCtrl.prototype.getSub = function(cid) {

console.log("state 2 : "+ this.state); 
//console.log(this);
    //$state.go("app.home");
    var  listc = this.menuSrvc; 
    //console.log(listc);
    //console.log(cid);
    for(var i=0; i<= listc.length ; i++){

        if ( listc[i].id === parseInt(cid) )
        { 

            console.log(listc[i].Subcategories);
            this.subcat =  listc[i].Subcategories ;
           return (this.subcat);
          
    this.state.go("app.home" . 'subcat':this.subcat);
        }
    }
 
    }
    //console.log(listc.indexOf(id));


return menuCtrl;
    
})();



menuModule.controller('menuCtrl', menuCtrl);
