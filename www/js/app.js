// Declare app level module which depends on filters, and services

angular.module('wp.filters', []);
angular.module('wp.services', []);
angular.module('wp.directives', []);
angular.module('wp.controllers', []);

angular.module('wp', [
    'ngRoute',
    'ngCookies',
    'ngTouch',
    'pascalprecht.translate',
    'ngStorage',
    'wp.filters',
    'wp.services',
    'wp.directives',
    'wp.controllers'
]).
    config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
        'use strict';

        $translateProvider.useLocalStorage();
//        $translateProvider.preferredLanguage('en-US');
        $translateProvider.preferredLanguage('sl-SI');
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $routeProvider.when('/', {templateUrl: 'js/index/partials/indMain.html', controller: 'indMainCtrl'});

        $routeProvider.otherwise({redirectTo: '/'});
    }]);