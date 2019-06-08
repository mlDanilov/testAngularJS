using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace webAngularJS.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Countries()
        {
            return View();
        }

        public ActionResult Redirect(int? number_ = null)
        {
            if (number_ == 0)
                return RedirectToAction("Index");
            else
                return View("Other");
        }

        public ActionResult Other()
        {
            return View("Other");
        }

        public ActionResult UserFilter()
        {
            return View();
        }

        public ActionResult AddCity()
        {
            return View();
        }

        public ActionResult DirectiveCityList()
        {
            return View();
        }

        public ActionResult DirectiveCountryList()
        {
            return View();
        }

        public ActionResult Example()
        {
            return View();
        }
    }
}