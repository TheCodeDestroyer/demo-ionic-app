angular.module('wp.controllers').controller('indHomeCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
    'use strict';


    if ($localStorage.wpWorkouts) {
        $scope.workouts = $localStorage.wpWorkouts;
    }
    else {
        $scope.workouts = [
            { title: 'muscle_groups.CHEST', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'muscle_workouts.chest.BARBELL_BENCH_PRESS', weight: 0 },
            { title: 'muscle_workouts.chest.DUMBBELL_BENCH_PRESS', weight: 0 },
            { title: 'muscle_workouts.chest.DUMBBELL_BUTTERFLY', weight: 0 },
            { title: 'muscle_groups.TRICEPS', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'muscle_workouts.triceps.DUMBBELL_TRICEPS_KICKBACK', weight: 0 },
            { title: 'muscle_workouts.triceps.DIPS', weight: 0 },
            { title: 'muscle_groups.BICEPS', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'muscle_workouts.biceps.BICEPS_CURLS', weight: 0 },
            { title: 'muscle_workouts.biceps.DUMBBELLS_CONCENTRATION_CURL', weight: 0 },
            { title: 'muscle_workouts.biceps.DUMBBELL_HAMMER_CURLS', weight: 0 },
            { title: 'muscle_groups.BACK', class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'muscle_workouts.back.DEADLIFT', weight: 0 },
            { title: 'muscle_workouts.back.LAT_PULLDOWN', weight: 0 },
            { title: 'muscle_workouts.back.ONE_ARM_DUMBBELL_ROW', weight: 0 },
            { title: 'muscle_groups.SHOULDERS', weight: 0, class: 'table-view-divider', hideWeightAndActions: true },
            { title: 'muscle_workouts.shoulders.DUMBBELL_SIDE_RAISES', weight: 0 },
            { title: 'muscle_workouts.shoulders.SHRUGS_WITH_DUMBBELLS', weight: 0 },
            { title: 'muscle_workouts.shoulders.SHOULDER_PRESS', weight: 0 },
            { title: 'muscle_workouts.shoulders.DUMBBELL_FORWARD_RAISES', weight: 0 },
            { title: 'muscle_groups.ABS', class: 'table-view-divider', hideWeightAndActions: true },
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