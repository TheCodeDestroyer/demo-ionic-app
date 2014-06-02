angular.module('wp.services').factory('cmnNavigationSvc', ['$location', function ($location) {
    'use strict';

    function backToMainMenu () {
        $location.path('/index');
    }

    function redirect (uri) {
        if (uri.length > 0) {
            $location.path(uri);
        }
    }

    function navigateBack() {
        switch ($location.path()) {
            case '/index':
                $location.path('/index');
                break;
            case '/settings':
                $location.path('/index');
                break;
            case '/login/settings':
                $location.path('/login');
                break;
            default:
                $location.path('/index');
        }
    }

    function logout () {
        $location.path('/login');
    }

    function login (){
        $location.path('/index');
    }

    function settings (){
        $location.path('/settings');
    }

    function loginSettings () {
        $location.path('/login/settings');
    }

    function closeApp (){
    }

    return {
        backToMainMenu: backToMainMenu,
        redirect: redirect,
        logout: logout,
        login: login,
        loginSettings: loginSettings,
        settings: settings,
        navigateBack: navigateBack,
        closeApp: closeApp
    };
}]);