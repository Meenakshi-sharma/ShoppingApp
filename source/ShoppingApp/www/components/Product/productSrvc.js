var loginSrvc;

loginSrvc = (function($log, $http, $q) {

    var ls = this;
    ls.$log = $log;
    ls.$http = $http;
    ls.$q = $q;

    $log.debug("constructing loginSrvc");

    var loginSrvc = {
        chkLogin: function(username, password) {
            var deferred;
            $log.debug("get globalCompanyFields service");
            console.log(username);
            deferred = ls.$q.defer();
            $http.post('http://magento-netsol.netsol.local/magento_1.9/index.php/phonegapapp/users/login', {
                    email: username,
                    password: password
                })
                .success((function(_this) {
                    return function(data, status) {
                        $log.debug("globalCompanyFields " + (angular.toJson(data, true)));
                        return deferred.resolve(data);
                    };
                })(this)).error((function(_this) {
                    return function(data, status, headers) {
                        $log.error("Failed to Login" + status);
                        $log.error("Failed to Login Service");
                        return deferred.reject(data);
                    };
                })(this));
            return deferred.promise;

        }
    }

    return loginSrvc;
});

loginModule.factory('loginSrvc', loginSrvc);