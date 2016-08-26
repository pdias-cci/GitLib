/*
    Description : This controller is for users authentication.
*/
(function() {

    // Default environment variables
    var __env = {};

    // Import variables if present
    if (window) {
        Object.assign(__env, window.__env);
    }

    var __const = {};
    if (window) {
        Object.assign(__const, window.__const);
    }

    angular
        .module(window.__env.MainAppName)
        .controller('loginController', loginController);

    loginController.$inject = ['$location', '$scope', '$window'];

    function loginController($location, $scope, $window) {
    }

})();