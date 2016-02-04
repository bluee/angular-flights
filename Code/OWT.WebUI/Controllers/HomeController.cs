using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OWT.WebUI.Model;
using System.Diagnostics;

namespace OWT.WebUI.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Returns initial page
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }

    }
}