angular.module('wp.controllers').controller('indMainCtrl', ['$scope', function($scope) {
    'use strict';

    $scope.tabs = [
        { title: 'HOME', htmlUri: 'js/index/partials/indHome.html', icon: 'icon-home' },
        { title: 'SETTINGS', htmlUri: 'js/index/partials/indSetting.html', icon: 'icon-gear' }
    ];

    $scope.changeView = privateChangeView;

    $scope.swipe = function(swipeDirection){

        var currentTabIndex = getCurrentTabIndex();

        if  (swipeDirection === 1) {
            currentTabIndex++;
        } else {
            currentTabIndex--;
        }

        if (currentTabIndex > -1 && currentTabIndex <= ($scope.tabs.length - 1)) {
            $scope.templateUri =   $scope.tabs[currentTabIndex].htmlUri;
            $scope.subHeaderShown = $scope.templateUri.indexOf('indCustomers.html') > -1;
        }
    };

    $scope.checkIfActive = function (uri) {
        return $scope.templateUri === uri ? 'active' : '';
    };

    //DYNAMIC FUNCTIONS
    (function setTab() {
        var tabUri = $scope.tabs[0].htmlUri;
        privateChangeView(tabUri);
    })();

    function getCurrentTabIndex (){
        for (var i = 0; i < $scope.tabs.length; i++) {
            if ($scope.tabs[i].htmlUri === $scope.templateUri) {
                return i;
            }
        }
    }

    function privateChangeView(uri){
        $scope.templateUri =   uri;
    }

}]);