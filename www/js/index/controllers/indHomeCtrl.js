angular.module('wp.controllers').controller('indHomeCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
    'use strict';


    if ($localStorage.wpWorkouts) {
        $scope.workouts = $localStorage.wpWorkouts;
    }
    else {
        $scope.workouts = [
            { title: 'muscle_groups.CHEST', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'Barbell Bench Press', weight: 0 },
            { title: 'Dumbbell Bench Press', weight: 0 },
            { title: 'Dumbbell Butterfly', weight: 0 },
            { title: 'muscle_groups.TRICEPS', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'Dumbbell Triceps Kickback', weight: 0 },
            { title: 'Chair Dips', weight: 0 },
            { title: 'muscle_groups.BICEPS', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'Bicep Curls', weight: 0 },
            { title: 'Dumbbells Concentration Curl', weight: 0 },
            { title: 'Dumbbell Hammer Curls', weight: 0 },
            { title: 'muscle_groups.BACK', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'Deadlift', weight: 0 },
            { title: 'Lat Pulldown', weight: 0 },
            { title: 'One Arm Dumbbell Row', weight: 0 },
            { title: 'muscle_groups.SHOULDERS', weight: 0, class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'Dumbbell Side Raises', weight: 0 },
            { title: 'Shrugs with Dumbbells', weight: 0 },
            { title: 'Shoulder Press', weight: 0 },
            { title: 'Dumbbell Forward Raises', weight: 0 },
            { title: 'ABS', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'placeholder', weight: 0 }
        ];
        $localStorage.wpWorkouts = $scope.workouts;
    }



    $scope.increaseWeight = function (index) {
        $scope.workouts[index].weight ++;
        $localStorage.wpWorkouts = $scope.workouts;
    };

    $scope.decreaseWeight = function (index) {
        $scope.workouts[index].weight --;
        $localStorage.wpWorkouts = $scope.workouts;
    };

}]);