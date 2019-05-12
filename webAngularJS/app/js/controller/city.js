var worldApp = angular.module('worldApp');
worldApp.controller('cityController', function ($scope) {
    
    $scope.PropertyMode = "Established";
    $scope.sortparam = "Name";

    $scope.countryId = {};

    $scope.Countries = [
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

    $scope.milleniumFunc = function (city) {
        return city.Established > 999;
    }

    $scope.Cities = [
        {
            Id: 1,
            Name: "Москва",
            CountryId: 1,
            Population: 12615882,
            Established: 1147
        },
         {
             Id: 2,
             CountryId: 3,
             Name: "Минск",
             Population: 1992685,
             Established: 1067
         }
         ,
         {
             Id: 3,
             CountryId: 2,
             Name: "Киев",
             Population: 2934522,
             Established: 482
         }
         ,
         {
             Id: 4,
             CountryId: 4,
             Name: "Варшава",
             Population: 1758143,
             Established: 1300
         }
         ,
         {
             Id: 5,
             CountryId: 1,
             Name: "Арти",
             Population: 12997,
             Established: 1783
         }
          ,
         {
             Id: 6,
             CountryId: 1,
             Name: "Атиг",
             Population: 3162,
             Established: 1790
         }
          ,
         {
             Id: 7,
             CountryId: 1,
             Name: "Верхние Серги",
             Population: 5702,
             Established: 1742
         }
          ,
         {
             Id: 8,
             CountryId: 4,
             Name: "Краков",
             Population: 769498,
             Established: 965
         }

    ];


    $scope.getTemplate = function () {
        return 'CityList.html';
    }

    $scope.somestyle = { background: 'gold', color: '#333' };
    $scope.someclass = "myclass";

    $scope.someEvent01 = function ($event) {
        console.log("preved, medved!!!");
    }
})