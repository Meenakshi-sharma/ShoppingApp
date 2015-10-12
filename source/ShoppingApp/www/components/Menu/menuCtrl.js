var menuCtrl;

menuCtrl = (function($state,$stateParams) {

    
    function menuCtrl(menuSrvc) {

this.menuSrvc = menuSrvc;
console.log(menuSrvc);
this.categories = menuSrvc;
 this.subcat = [];  

    }
menuCtrl.prototype.getSub = function(cid) {
    listc = this.menuSrvc; 
    console.log(listc);
    console.log(cid);
    for(var i=0; i<= listc.length ; i++){

        if ( listc[i].id === parseInt(cid) )
        { 

            console.log(listc[i].Subcategories);
            this.subcat =  listc[i].Subcategories ;
           return (this.subcat);
            $state.go("app.home", this.subcat);
        }
    }
    }
    //console.log(listc.indexOf(id));



    return menuCtrl;
})();

menuModule.controller('menuCtrl', menuCtrl);