'use strict'
worldApp.factory('dataService', function (cityService, countryService) {

    return {

        /*

        CalcCitiesExt: function () {

            let res = [];

 

            for (let i = 0; i < cityService.Cities.length; i++) {

                let city = {

                    Id: cityService.Cities[i].Id,

                    Name: cityService.Cities[i].Name,

                    CountryName: ""

                }

                for (let j = 0; j < countryService.Countries.length; j++) {

 

                    if (cityService.Cities[i].CountryId == countryService.Countries[j].Id) {

                        city.CountryName = countryService.Countries[j].Name;

                        break;

                    }

                }

                res.push(city);

 

            }

            return res;

        },

        CalcCountriesExt: function () {

            let res = [];

 

            for (let i = 0; i < countryService.Countries.length; i++) {

                let country = {

                    Id: countryService.Countries[i].Id,

                    Name: countryService.Countries[i].Name,

                    CapitalName: ""

                }

                for (let j = 0; j < cityService.Cities.length; j++) {

 

                    if (countryService.Countries[i].CapitalId == cityService.Cities[j].Id) {

                        country.CapitalName = cityService.Cities[j].Name;

                        break;

                    }

                }

                res.push(country);

 

            }

            return res;

        }

        */



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

        //CalcCountriesExt : function() {
        //    citiesService.get({}, function (data) {

        //        cities = data;

        //        for (let i = 0; i < citiesService.Cities.length; i++) {

        //            let city = {

        //                Id: cityService.Cities[i].Id,

        //                Name: cityService.Cities[i].Name,

        //                CountryName: ""

        //            }

        //            for (let j = 0; j < countries.length; j++) {



        //                if (cityService.Cities[i].CountryId == countries[j].Id) {

        //                    city.CountryName = countries[j].Name;

        //                    break;

        //                }

        //            }

        //            res.push(city);



        //        }

        //        return res;

        //    }, function (err) {

        //        alert('Не удалось получить countries: ' + err.toString());

        //        return null;

        //    });
        
        
        //}
    
        CalcCountriesExt: function () {

            let res = [];

            countryService.get({},
            function (data) {
                res = data;
            },
            function (err) {
                console.log("Не удалось прочитать countries!!! :" + err);
            });

            return res;

        }


    }



});