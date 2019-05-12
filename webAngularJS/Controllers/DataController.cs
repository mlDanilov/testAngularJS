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

        public IEnumerable<City> GetCities()
        {

            return new City[] {
                 new City() {
            Id = 1,
            Name = "Москва",
            CountryId = 1,
            Population = 12615882
            //,Established= new DateTime(1147,0, 0)
        },
         new City()  {
             Id = 2,
             CountryId = 3,
             Name = "Минск",
             Population = 1992685
             //, Established=  new DateTime(1067, 0,0)
         }
         ,
         new City()  {
             Id= 3,
             CountryId = 2,
             Name= "Киев",
             Population = 2934522
             //, Established = new DateTime(482, 0,0)
         }
         , new City() {
             Id = 4,
             CountryId = 4,
             Name = "Варшава",
             Population = 1758143
             //,Established=  new DateTime(1300, 0, 0)
         }
         ,
         new City() {
             Id= 5,
             CountryId = 1,
             Name = "Арти",
             Population = 12997
             //, Established= new DateTime(1783, 0, 0)
         }
          , new City() {
             Id = 6,
             CountryId = 1,
             Name = "Атиг",
             Population = 3162
             //, Established = new DateTime(1790, 0,0)
         }
          , new City() {
             Id = 7,
             CountryId = 1,
             Name = "Верхние Серги",
             Population = 5702
             //,Established = new DateTime(1742, 0, 0)
         }
          , new City() {
             Id = 8,
             CountryId = 4,
             Name = "Краков",
             Population = 769498
             //,Established=  new DateTime(965 ,0, 0)
         }
            };

        }
    }
}
