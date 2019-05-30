var worldApp = angular.module('worldApp');
worldApp.controller('cityController', function ($scope, dataService) {

    $scope.PropertyMode = "Established";
    $scope.sortparam = "Name";

    $scope.countryId = {};

    //$scope.Countries = dataService.Countries;
    /* [
    {
        Id: 1,
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
        Area: 312679
    }];
    */
    $scope.milleniumFunc = function (city) {
        return city.Established > 999;
    }

    $scope.Cities = dataService.CalcCitiesExt();

    $scope.Cities = dataService.CalcCountriesExt();
    //$scope.Cities = dataService.Cities;
    //$scope.Cities = remoteDataService.query(function () { });



    $scope.getTemplate = function () {
        return 'CityList.html';
    }

    $scope.AddCity = function () {

    }

    $scope.somestyle = { background: 'gold', color: '#333' };
    $scope.someclass = "myclass";

    $scope.someEvent01 = function ($event) {
        console.log("preved, medved!!!");
    }
});
