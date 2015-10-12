var signupSrvc;

signupSrvc = (function($log, $http, $q) {

    var sp = this;
    sp.$log = $log;
    sp.$http = $http;
    sp.$q = $q;

    $log.debug("constructing signupSrvc");

    var signupSrvc = {
        chkLogin: function(username, password) {
            var deferred;
            $log.debug("get globalCompanyFields service");
            deferred = sp.$q.defer();
            $http.post('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/users/register', {
                    email: username,
                    password: password,
                    
                })
                .success((function(_this) {
                    return function(data, status) {
                        $log.debug("globalCompanyFields " + (angular.toJson(data, true)));
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to Signup" + status);
                        $log.error("Failed to Signup Service");
                        return deferred.reject(data);
                    };
                })(this));
            return deferred.promise;

        }
    }
    return signupSrvc;
});

signupModule.factory('signupSrvc', signupSrvc);