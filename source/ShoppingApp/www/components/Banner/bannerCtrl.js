var bannerCtrl;

bannerCtrl = (function($scope,$ionicSideMenuDelegate) {
    function bannerCtrl($scope,bannerSrvc,$ionicSideMenuDelegate) {

       this.category= bannerSrvc;
console.log(bannerSrvc);
        } 
     /*  console.log(bannerSrvc.children[0].children);
       this.category = bannerSrvc.children[0].children[2]; 
       this.mcat = bannerSrvc.children[0].children[2].name ;
       $scope.$on('scanner-started', function(event, args) {

    console.log(args);
this.category = bannerSrvc.children[0].children[2]; 
       this.mcat = bannerSrvc.children[0].children[1].name ;
console.log(this.mcat);

}); 
// this.cid = window.localStorage['id']; 
//}
	  //console.log(window.localStorage['id']);
this.subcat =  menuSrvc[this.cid].Subcategories ;
    $scope.$watch(function () {
    return $ionicSideMenuDelegate.isOpenLeft();
  },
     function (isOpen) {
    if (isOpen){
      console.log("open");
    }
    else{
        console.log("close");
        this.cid = window.localStorage['id'];
         this.category = menuSrvc; 
         this.subcat =  menuSrvc[this.cid].Subcategories ;
        console.log(this);
    }

  });    
    console.log(this);*/
    
 
    

    return bannerCtrl;
})();

bannerModule.controller('bannerCtrl', bannerCtrl);

