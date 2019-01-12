using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManage_Beta.Controllers
{
    public class StaffConsoleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}