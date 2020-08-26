using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AplicacionBlanco.Models
{
    public class Db_usuarios
    {
        public List<Registro_usuarios> Lista { get; set; }

        public Db_usuarios()
        {
            this.Lista = new List<Registro_usuarios>();

            this.Lista.Add(new Registro_usuarios(
                "John",
                "123",
                "1"
                ));
            this.Lista.Add(new Registro_usuarios(
                "Juan",
                "123",
                "2"
                ));
            this.Lista.Add(new Registro_usuarios(
                "Miguel",
                "123",
                "3"
                ));
        }
    }
}