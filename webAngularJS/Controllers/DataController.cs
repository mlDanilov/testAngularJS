using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using webAngularJS.Models;

namespace webAngularJS.Controllers
{
    public class DataController : ApiController
    {
        [HttpGet]
        public IEnumerable<City> GetCities()
        {
            return getCities();
        }
        private IEnumerable<City> getCities()
        {

            return new City[] {
            new City() {
            Id = 1,
            Name = "Москва1",
            CountryId = 1,
            Population = 12615882
            //,Established= new DateTime(1147,0, 0)
        },
         new City()  {
             Id = 2,
             CountryId = 3,
             Name = "Минск2",
             Population = 1992685
             //, Established=  new DateTime(1067, 0,0)
         }
         ,
         new City()  {
             Id= 3,
             CountryId = 2,
             Name= "Киев3",
             Population = 2934522
             //, Established = new DateTime(482, 0,0)
         }
         , new City() {
             Id = 4,
             CountryId = 4,
             Name = "Варшава4",
             Population = 1758143
             //,Established=  new DateTime(1300, 0, 0)
         }
         ,
         new City() {
             Id= 5,
             CountryId = 1,
             Name = "Арти5",
             Population = 12997
             //, Established= new DateTime(1783, 0, 0)
         }
          , new City() {
             Id = 6,
             CountryId = 1,
             Name = "Атиг6",
             Population = 3162
             //, Established = new DateTime(1790, 0,0)
         }
          , new City() {
             Id = 7,
             CountryId = 1,
             Name = "Верхние Серги7",
             Population = 5702
             //,Established = new DateTime(1742, 0, 0)
         }
          , new City() {
             Id = 8,
             CountryId = 4,
             Name = "Краков8",
             Population = 769498
             //,Established=  new DateTime(965 ,0, 0)
         }
            };

        }


        [HttpGet]
        public IEnumerable<Country> GetCountries()
        {
            return getCountries();
        }
        private IEnumerable<Country> getCountries()
        {

            return new Country[] {
            new Country() {
            Id = 1,
            Name = "Россия",
            СapitalId = 1
        },
          new Country() {
            Id = 3,
            Name = "Беларусь",
            СapitalId = 2
        },
         new Country() {
            Id = 2,
            Name = "Украина",
            СapitalId = 3
        }
         ,
         new Country() {
            Id = 4,
            Name = "Польша",
            СapitalId = 4
        }
            };

        }
    }
}
