var worldApp = angular.module('worldApp', ['ngResource']);
worldApp.controller('countryController', function ($scope,
    dataService, countryService, cityService, countryFactory) {

    //$scope.Countries = countryFactory.post({});
    $scope.Countries = [
        { Id: 0, Name: "preved!" },
        { Id: 1, Name: "medved!" }
    ];
    countryService.get({},
        function success(countries) {
                cityService.get({},
               function success(cities) {
                   $scope.Countries = dataService.CalcCountriesExt(countries, cities);
               },
           function error(err) {
               alert('Не удалось загрузить города ' + err);
           }
           ) ;
        },
    function error(err) {
        alert('Не удалось загрузить страны '+err);
    }
    );

   

    //$scope.Countries = dataService.CalcCountriesExt();


    $scope.ExampleClick = function () {
        $scope.Countries = dataService.CalcCountriesExt();

    }
    /*
    countryService.get({},
        function success(responce) {
            $scope.Countries = responce;
        },
        function error(err) {
            console.log("Не удалось прочитать countries!!! :" + err);
        });
   */


});