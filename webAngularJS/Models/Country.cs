using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webAngularJS.Models
{
    /// <summary>
    /// Страна
    /// </summary>
    public class Country
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
        public int СapitalId { get; set; }
    }
}