using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace webAngularJS.Models
{
    /// <summary>
    /// Город
    /// </summary>
    public interface ICity
    {
        /// <summary>
        /// Уникальный код
        /// </summary>
        int Id { get; set; }
        /// <summary>
        /// Название
        /// </summary>
        string Name { get; set; }
        /// <summary>
        /// Уникальный код страны
        /// </summary>
        int CountryId { get; set; }
        /// <summary>
        /// Население
        /// </summary>
        int Population { get; set; }
        /// <summary>
        /// Год основания
        /// </summary>
        DateTime Established { get; set; }
    }
}
