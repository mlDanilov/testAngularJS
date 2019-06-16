'use strict'
worldApp.factory('dataService', function ($http, $q, cityService, countryService) {

    return {

        CalcCitiesExt: function () {

            let res = [];

            //let countries = countryService.Countries();



            let countries = [];

            countryService.get({}, function (data) {

                countries = data;

                for (let i = 0; i < cityService.Cities.length; i++) {

                    let city = {

                        Id: cityService.Cities[i].Id,

                        Name: cityService.Cities[i].Name,

                        CountryName: ""

                    }

                    for (let j = 0; j < countries.length; j++) {



                        if (cityService.Cities[i].CountryId == countries[j].Id) {

                            city.CountryName = countries[j].Name;

                            break;

                        }

                    }

                    res.push(city);



                }

                return res;

            }, function (err) {

                alert('Не удалось получить countries: ' + err.toString());

                return null;

            });





        },

        CalcCountriesExt: function (countries, cities) {

            let res = [];

            for (let i = 0; i < countries.length; i++) {

                let country = {

                    Id: countries[i].Id,

                    Name: countries[i].Name,

                    CapitalName: ""

                }

                for (let j = 0; j < cities.length; j++) {
                    if (countries[i].СapitalId == cities[j].Id) {
                        country.CapitalName = cities[j].Name;
                        break;
                    }
                }
                res.push(country);
            }
            return res;
        },

        getData: function ()
        {
            var deferred = $q.defer();

            $http({ method: 'GET', url: '/api/Data/GetCountries' }).then
                (function success(responce) {
                    deferred.resolve(responce.data);
                }, function error(responce) {
                    deferred.reject(responce.data);
                });

            return deferred.promise;
        }

    }
});