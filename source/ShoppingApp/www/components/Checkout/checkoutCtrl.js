var checkoutCtrl;

checkoutCtrl = (function($scope,$ionicSideMenuDelegate,$state) {

    function checkoutCtrl($scope) {
alert("InAppBrowser");
//        
            var ref = cordova.InAppBrowser.open('http://beta.eurocarparts.com/','_self', 'hardwareback=yes,directories=no,titlebar=no,toolbar=no,location=yes,status=no,menubar=no,scrollbars=no,resizable=no');
            var myCallback = function(event) { 
                cordova.InAppBrowser.open('http://beta.eurocarparts.com/','_self', 'hardwareback=yes,directories=no,titlebar=no,toolbar=no,location=yes,status=no,menubar=no,scrollbars=no,resizable=no'); }
            ref.addEventListener('exit', myCallback);
        
       
      /* console.log(checkoutSrvc.children[0].children);
       this.category = checkoutSrvc.children[0].children[window.localStorage['id']]; 
       this.mcat = checkoutSrvc.children[0].children[window.localStorage['id']].name ; 
       this.showMe = true;
       this.state = $state;*/

     }

     /*checkoutCtrl.prototype.showMeSearch = function(searchproducts){

        window.localStorage['search'] = this.searchproducts;
    
        this.state.go("app.prodListing");

     }*/
       
    

    return checkoutCtrl;
})();

checkoutModule.controller('checkoutCtrl', checkoutCtrl);

