var worldApp = angular.module('worldApp', ['ngResource']);
worldApp.controller('countryController', function ($scope, dataService, countryService) {

    //$scope.Countries = dataService.CalcCountriesExt();

    countryService.get({},
        function success(responce) {
            $scope.Countries = responce;
        },
        function error(err) {
            console.log("Не удалось прочитать countries!!! :" + err);
        });
   


});