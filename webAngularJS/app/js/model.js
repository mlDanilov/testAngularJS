var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope,$interval) {
    $scope.testText = "preved!!!"
    $scope.changeText = function () {
        if ($scope.testText == "preved!!!")
            $scope.testText = "medved!!!";
        else
            $scope.testText = "preved!!!";
    }

    

    $scope.counterValue = 0;

    var timer = $interval(function () {
        if ($scope.counterValue > 9)
            $scope.counterValue = 0;
        else
            $scope.counterValue++;
    }, 5000
    )

    $scope.cancelTimer = function () {
        $interval.cancel(timer);
    }

});