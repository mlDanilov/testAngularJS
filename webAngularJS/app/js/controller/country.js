var worldApp = angular.module('worldApp', ['ngResource']);
worldApp.controller('countryController', function ($scope, $http,
    dataService, countryService, cityService, countryFactory) {

    //$scope.Countries = countryFactory.post({});
  
   //Тестируем $http
    $http.get('/app/countryListData.json').
                then(function success(response) {
                    $scope.Countries = response.data;
                    console.log(response);
                });
    /*
    $scope.Countries = [
        { Id: 0, Name: "preved!" },
        { Id: 1, Name: "medved!" }
    ];
    */
    /*
   //Тестируем сервисы
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
    */
   

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

    $scope.Header = "Иди в жопу!!!";
});