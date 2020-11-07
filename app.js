var app = angular.module('myApp', []);
app.controller('myCtrl', async function($scope) {
    $scope.name = "Angular demo!"
    $scope.first = 0;
    $scope.second = 0;

    $scope.changeEverything = function() {
        $scope.name = "Angular demo!"
        $scope.first = 0;
        $scope.second = 0;
    }
})