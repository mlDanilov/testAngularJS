var worldApp = angular.module('worldApp', []);
worldApp.controller('countryController', function ($scope) {

$scope.Countries = [
    {
        Id : 1,
        Name: "Россия",
        CapitalId: 1,
        Population: 146781095,
        Area: 17125191
    },
    {
        Id: 2,
        Name: "Украина",
        CapitalId: 3,
        Population: 41953020,
        Area: 603628
    },
    {
        Id: 3,
        Name: "Беларусь",
        CapitalId: 2,
        Population: 950380,
        Area: 207595
    },
    {
        Id: 4,
        Name: "Польша",
        CapitalId: 4,
        Population: 38422346,
        Area:  312679
    }

];

$scope.Value = 10;

$scope.GetCountOfCountries = function () {
    return $scope.Countries.Length;
}

$scope.Minus = function () {
    $scope.Value--;
    console.log($scope.Value);
}

$scope.Plus = function () {
    $scope.Value++;
    console.log($scope.Value);
}


});