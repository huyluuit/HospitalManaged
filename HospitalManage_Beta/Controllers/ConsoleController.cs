﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManage_Beta.Controllers
{
    public class ConsoleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}