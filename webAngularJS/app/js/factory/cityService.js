'use strict'
var worldApp = angular.module('worldApp');
worldApp.factory('cityService', function ($resource) {
    return $resource('api/Data/GetCities', {},
        {
            get: {
                method: 'GET',
                cache: false,
                isArray: true
            }
        });
});