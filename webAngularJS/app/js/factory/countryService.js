'use strict'
var worldApp = angular.module('worldApp');
worldApp.factory('countryService', function ($resource) {
    return $resource('/api/Data/GetCountries', {},
    {
        get: {
            method: 'GET',
            cache: false,
            isArray: true,
        }
    });
});