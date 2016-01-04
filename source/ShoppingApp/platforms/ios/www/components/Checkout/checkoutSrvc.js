var checkoutSrvc;

checkoutSrvc = (function($log, $http, $q, constants) {

    var chk = this;
    chk.$log = $log;
    chk.$http = $http;
    chk.$q = $q;

    var checkoutSrvc = {
        
        getUserShippingData: function(customerId, quoteId) { console.log("IN getUserShippingData");console.log("customer id "+ customerId); console.log("quoteId id "+ quoteId);
            var deferred;
            deferred = chk.$q.defer();
            $http.post(constants.API_URL+'checkout/getShippingAddress', {
                    customerId: customerId,
                     quoteId: quoteId
                })
                .success((function(_this) {
                    return function(data, status) {
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
        getUserBillingData: function(customerId, quoteId) { console.log("IN getUserBillingData");console.log("customer id "+ customerId); console.log("quoteId id "+ quoteId);
            var deferred;
            deferred = chk.$q.defer();
            $http.post(constants.API_URL+'checkout/getBillingAddress', {
                    customerId: customerId,
                     quoteId: quoteId
                })
                .success((function(_this) {
                    return function(data, status) {
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
        updateUserBillingData: function(customerId, billingData) { console.log("IN updateUserBillingData");
            var deferred;
            deferred = chk.$q.defer();
            $http.post(constants.API_URL+'checkout/updateBillingAddress', {
                    customerId: customerId,
                    billing: billingData
                })
                .success((function(_this) { console.log("success billing update");
                    return function(data, status) { console.log(data); console.log(status);
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) { console.log("error billing update");
                    return function(data, status, headers) {  console.log(data); console.log(status);  console.log(headers);
                        $log.error("Failed to product" + status);
                        $log.error("Failed to product Service");
                        return deferred.reject(data);
                    };
                })(this));
           return deferred.promise;
        }, 
        updateUserShippingData: function(customerId, shippingData) { console.log("IN updateUserShippingData");
            var deferred;
            deferred = chk.$q.defer();
            $http.post(constants.API_URL+'checkout/updateShippingAddress', {
                    customerId: customerId,
                    shipping: shippingData
                })
                .success((function(_this) {
                    return function(data, status) {
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
        getUserCheckoutMethods: function() {
            var deferred;
            deferred = chk.$q.defer();
            $http.post(constants.API_URL+'checkout/getShippingAndPaymentMethods')
                .success((function(_this) {
                    return function(data, status) {
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to payment method" + status);
                        $log.error("Failed to product Service");
                        return deferred.reject(data);
                    };
                })(this));
           return deferred.promise;
        }

}
    return checkoutSrvc;
});

checkoutModule.factory('checkoutSrvc', checkoutSrvc);