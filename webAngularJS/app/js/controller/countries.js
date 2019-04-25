var countriesApp = angular.module('countriesApp', []);
countriesApp.controller('countriesController', function ($scope) {

$scope.Countries = [
    {
        Id : 1,
        Name: "Россия",
        Capital: "Москва",
        Population: 146781095,
        Area: 17125191
    },
    {
        Id: 2,
        Name: "Украина",
        Capital: "Киев",
        Population: 41953020,
        Area: 603628
    },
    {
        Id: 3,
        Name: "Беларусь",
        Capital: "Минск",
        Population: 950380,
        Area: 207595
    },
    {
        Id: 4,
        Name: "Польша",
        Capital: "Варшава",
        Population: 38422346,
        Area:  312679
    }

];


});