var cartSrvc;

cartSrvc = (function($log, $http, $q) {

    
    var pd = this;
    pd.$log = $log;
    pd.$http = $http;
    pd.$q = $q;
    
    var cartSrvc ;
    
    $log.debug("constructing cartSrvc");

    var cartSrvc = {
        
        getCartProducts: function(quoteId) {
            var deferred;
            $log.debug("get globalCompanyFields service");
            //console.log(username);
            deferred = pd.$q.defer();
            $http.post('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/cart/getCartProducts', {
                    quoteId: quoteId 
                })
                .success((function(_this) {
                    return function(data, status) {
                        $log.debug("globalCompanyFields " + (angular.toJson(data, true)));
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to product" + status);
                        $log.error("Failed to product Service");
                        return deferred.reject(data);
                    };
                })(this));
           return deferred.promise;
        },
        
        getCartTotal: function(quoteId) {
            var deferred;
            $log.debug("get globalCompanyFields service");
            //console.log(username);
            deferred = pd.$q.defer();
            $http.post('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/cart/getCartTotal', {
                    quoteId: quoteId 
                })
                .success((function(_this) {
                    return function(data, status) {
                        $log.debug("globalCompanyFields " + (angular.toJson(data, true)));
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to product" + status);
                        $log.error("Failed to product Service");
                        return deferred.reject(data);
                    };
                })(this));
           return deferred.promise;
        }    
}

    return cartSrvc;
});

homeModule.factory('cartSrvc', cartSrvc);