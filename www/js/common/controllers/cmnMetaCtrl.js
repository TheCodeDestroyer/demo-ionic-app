angular.module('wp.controllers').controller('cmnMetaCtrl', ['$scope', function($scope) {
    'use strict';

    var platformTemplate = setPlatformTemplate();

    $scope.stylesheets = [
        {href: 'css/ratchet/ratchet.css', type:'text/css'},
        {href: platformTemplate, type:'text/css'},
        {href: 'css/overrides.css', type:'text/css'},
        {href: 'css/prolos/flaticon.css', type:'text/css'},
        {href: 'css/style.css', type:'text/css'}
    ];

    function setPlatformTemplate () {
        var platform = Rho.System.platform;
        var hrefStyleSheet = 'css/ratchet/ratchet-theme-android.css';

        switch (platform) {
            case 'ANDROID':
                hrefStyleSheet = 'css/ratchet/ratchet-theme-android.css';
                break;
            case 'APPLE':
                hrefStyleSheet = 'css/ratchet/ratchet-theme-ios.css';
                break;
            default:
                hrefStyleSheet = 'css/ratchet/ratchet-theme-android.css';
        }

        return hrefStyleSheet;
    }
}]);