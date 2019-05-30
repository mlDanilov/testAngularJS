var worldApp = angular.module('worldApp', ['ngResource']);
worldApp.controller('countryController', function ($scope, dataService) {

    $scope.Countries = dataService.CalcCountriesExt();


})
;