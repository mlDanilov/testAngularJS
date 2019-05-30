'use strict'
var worldApp = angular.module('worldApp');
worldApp.factory('countryService', function ($resource) {
    return $resource('api/Data/Countries/', {},
    {
        get: {
            method: 'GET',
            cache: false,
            isArray: true,
        }
    });
    /*

    return {

        Countries: [

            { Id: 1, Name: "Россия", CapitalId: 1 },

            { Id: 2, Name: "Украина", CapitalId: 3 },

            { Id: 3, Name: "Беларусь", CapitalId: 4 },

            { Id: 4, Name: "Польша", CapitalId: 8 }

        ]

    };

    */





});