//alert('Hola');

class Usuario {
    constructor(nombre, password, parametro) {
        this.nombre = nombre;
        this.password = password;
        this.parametro = parametro;
    }
}

var usuarios = [
    new Usuario("User1", "123", "1"),
    new Usuario("User2", "123", "2"),
    new Usuario("User3", "123", "3")
]

//alert(usuarios[0].nombre);
//alert(usuarios[1].nombre);
//alert(usuarios[2].nombre);

var entrada = "123"
/*
usuarios.forEach(function (user) {
    //alert(user.nombre)
    if (user.password == entrada) {
        alert("Match");
        //break;
    }
}
);
*/

// checks whether an element is even
const validar = (element) => element.password === "123";

//alert(usuarios.some(validar));

function validador(pass) {
    //alert("Hola");
    //alert(pass);
    const validar = (element) => element.password === pass;
    if (usuarios.some(validar)) {
        url = "https://app.powerbi.com/reportEmbed?reportId=74406efc-f606-4861-8770-cd432675f163&autoAuth=true&ctid=8fbaa5bf-2ecc-4dc8-b56b-8f92e307f076&pageName=datos&$filter=prueba_hector/primario%20eq%20%271%27"
        document.getElementById("Principal").innerHTML = "";
        document.getElementById("iframe").innerHTML = "<iframe style='width:100%; height:100%;' src='" + url +"'>"; 
    }
}

function mostrarFiltrado(pass) {
    if (usuarios.some(validar)) {
        document.cookie = "ASP.NET_SessionId=hxyhkqjktffs5it1yq0jglh3"
        url = "https://app.powerbi.com/reportEmbed?reportId=74406efc-f606-4861-8770-cd432675f163&autoAuth=true&ctid=8fbaa5bf-2ecc-4dc8-b56b-8f92e307f076&pageName=datos&$filter=prueba_hector/primario%20eq%20%27" + pass + "%27";
        //document.getElementById("Principal").innerHTML = "";
        document.getElementById("iframe").innerHTML = "<iframe style='width:100%; height:100%;' src='" + url + "'>";
    }
}
