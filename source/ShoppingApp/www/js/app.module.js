var loginModule = angular.module('myApp.login', []);
var signupModule = angular.module('myApp.signup', []);

angular.module('myApp', [
    'myApp.login',
    'myApp.signup'
]);