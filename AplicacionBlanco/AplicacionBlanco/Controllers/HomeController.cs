using AplicacionBlanco.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AplicacionBlanco.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Filtro_PowerBi(string fname, string pass)
        {
            Db_usuarios db_usuarios = new Db_usuarios();
            foreach (var item in db_usuarios.Lista){
                if(fname == item.nombre && pass == item.pass)
                {
                    ViewBag.level = item.level;
                    ViewBag.nombre = item.nombre;
                }
            }
            
            
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Error()
        {
            ViewBag.Message = "Página de error";

            return View();
        }
    }
}