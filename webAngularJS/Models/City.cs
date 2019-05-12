using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webAngularJS.Models
{
    /// <summary>
    /// Город
    /// </summary>
    public class City : ICity
    {
        /// <summary>
        /// Уникальный код
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Название
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Уникальный код страны
        /// </summary>
        public int CountryId { get; set; }
        /// <summary>
        /// Население
        /// </summary>
        public int Population { get; set; }
        /// <summary>
        /// Год основания
        /// </summary>
        public DateTime Established { get; set; }
    }
}