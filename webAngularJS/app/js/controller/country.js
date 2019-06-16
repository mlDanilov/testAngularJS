var worldApp = angular.module('worldApp', ['ngResource']);
worldApp.controller('countryController', function ($scope, $http,
    dataService, countryService, cityService, countryFactory) {

    //$scope.Countries = countryFactory.post({});
  
    //Тестируем $http
    /*
    $http.get('/app/countryListData.json').
                then(function success(response) {
                    $scope.Countries = response.data;
                    console.log(response);
                });
    */
    dataService.getData().then(function success(data) {
        $scope.Countries = data;
    }, function error(responce) {
       
    });

    $scope.ExampleClick = function () {
        $scope.Countries = dataService.CalcCountriesExt();

    }


    $scope.AddCountry = function () {
        var data1 = { Name: $scope.CountryName };
        $http(
            {
                method: 'POST',
                url: '/api/Data/AddCountry',
                //cache: false,
                //isArray: true,
               // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: data1
            }
            );
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
    $scope.CountryName;
    $scope.Header = "Иди в жопу!!!";
});