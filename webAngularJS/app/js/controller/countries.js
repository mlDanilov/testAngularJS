var cntrsApp = angular.module('countriesApp', []);
cntrsApp.controller('countriesController', function ($scope) {


    $scope.Countries = [
        new {
            Name: "Россия",
            Capital: "Москва",
            Population: 146781095,
            Area: 17125191
        },
        new {
            Name: "Украина",
            Capital: "Киев",
            Population: 41953020,
            Area: 603628
        },
        new {
            Name: "Беларусь",
            Capital: "Минск",
            Population: 950380,
            Area: 207595
        },
        new {
            Name: "Беларусь",
            Capital: "Минск",
            Population: 38422346,
            Area:  312679
        }

    ];


});