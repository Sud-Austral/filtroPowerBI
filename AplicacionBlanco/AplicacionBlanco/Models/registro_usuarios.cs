using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AplicacionBlanco.Models
{
    public class Registro_usuarios
    {
        public string nombre { get; set; }
        public string pass { get; set; }
        public string level { get; set; }

        public Registro_usuarios(string nombre, string pass, string level)
        {
            this.nombre = nombre;
            this.pass = pass;
            this.level = level;
        }
    }

}