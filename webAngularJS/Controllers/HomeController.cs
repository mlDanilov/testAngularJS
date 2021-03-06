﻿using System;
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
    }
}