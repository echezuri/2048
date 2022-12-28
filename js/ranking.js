// Al realizar la primer carga en la consola da un error, pero funciona bien igualmente.
//

function agregar() {
  var vector = JSON.parse(localStorage["nombres"]);
  l = 10;
  console.log(typeof l);
  for (i = 0; i < l; i++) {    
    var nombre1 = vector[i].nombre;
    var puntos1 = vector[i].puntaje;
    var n = i + 1;
    lista = document.getElementById("ranking");

    var position = document.createElement("span");
    var pos = n;
    position.className = "position";
    position.innerHTML = pos;

    var nombre = document.createElement("span");
    var nom = nombre1;
    nombre.className = "name";
    nombre.innerHTML = nom;

    var puntos = document.createElement("span");
    var pun = puntos1;
    puntos.className = "points";
    puntos.innerHTML = pun;

    var nodo = document.createElement("li");
    nodo.className = "nodo";
    nodo.appendChild(position);
    nodo.appendChild(nombre);
    nodo.appendChild(puntos);

    lista.appendChild(nodo);
  }
}

window.onload = agregar();
