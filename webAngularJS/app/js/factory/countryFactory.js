'use strict'
var worldApp = angular.module('worldApp');
worldApp.factory('countryFactory', function ($resource) {
    return $resource('/api/Data/GetCountriesEnum', {},
    {
        post: {
            method: 'POST',
            isArray: true,
            headers: { 'Content-Type': 'application/json' }

        }
    });
});