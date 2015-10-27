var homeCtrl;

homeCtrl = (function($scope,$ionicSideMenuDelegate,$state) {
    function homeCtrl($scope,homeSrvc,$ionicSideMenuDelegate,$state) {


       
       console.log(homeSrvc.children[0].children);
       this.category = homeSrvc.children[0].children[window.localStorage['id']]; 
       this.mcat = homeSrvc.children[0].children[window.localStorage['id']].name ; }
       /*$scope.$on('scanner-started', function(event, args) {

    console.log(args);
this.category = homeSrvc.children[0].children[2]; 
       this.mcat = homeSrvc.children[0].children[1].name ;
console.log(this.mcat);
this.category = homeSrvc.children[0].children[2]; 
       this.mcat = homeSrvc.children[0].children[1].name ;
console.log(this.mcat);
$state.go($state.current, {}, {reload: true});*/

//}); 
// this.cid = window.localStorage['id']; 

	  //console.log(window.localStorage['id']);
/*this.subcat =  menuSrvc[this.cid].Subcategories ;
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
    console.log(this);
    }*/
 
    

    return homeCtrl;
})();

homeModule.controller('homeCtrl', homeCtrl);

