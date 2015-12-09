var bannerSrvc;

bannerSrvc = (function($log, $http, $q) {
    
    var bc = this;
    bc.$log = $log;
    bc.$http = $http;
    bc.$q = $q;
     
     bannerSrvc = { 
//Get Home Banners..        
        getBdata: function() {
        
            var deferred;
            deferred = bc.$q.defer();
            $http.get('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/products/bannerSlider')
                .success((function(_this) {
                    return function(data, status) {
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to fetch products" + status);
                        $log.error("Failed to fetch mens products");
                        return deferred.reject(data);
                    };
               })(this));
            return deferred.promise;
        },
            
//Get New Product listing...          
            getBdataSecond: function() {
                var deferred;
                
                deferred = bc.$q.defer();
                $http.get('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/products/newProductcollection')
                    .success((function(_this) {
                        return function(data, status) {
                           return deferred.resolve(data);
                         };
                    })(this)).error((function(_this) {
                        return function(data, status, headers) {
                            return deferred.reject(data);
                        };
                   })(this));
                return deferred.promise;
            },
//Get Special Products list..           
            getBdataSpecial: function() {
                var deferred;
                
                deferred = bc.$q.defer();
                $http.get('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/products/specialProducts')
                    .success((function(_this) {
                        return function(data, status) {
                           return deferred.resolve(data);
                         };
                    })(this)).error((function(_this) {
                        return function(data, status, headers) {
                            return deferred.reject(data);
                        };
                   })(this));
                return deferred.promise;
            }
}


  return bannerSrvc;
});  

bannerModule.factory('bannerSrvc', bannerSrvc)