// operador or  es que  puede o no estar un determiando objeto

// operador and   y que dos objetos pueden mostrase 

/*
Cortocircuito OR-cuando el valor de la izquierda
 en la expresión siempre pueda validar a true, es el
valor que se cargará por defecto


Cortocircuito AND-cuando el valor de la izquierda
 en la expresión siempre pueda validar a false, es el
 valor que se cargará por defecto
 */



function saludar(nombre) {

    nombre = nombre || "desconocido";

    console.log(`Nombre ${nombre}`)
}

// saludar("kevin");

console.log("nombre" && "lado derecho")

console.clear()
// promp

let alerta = alert("Hola esto es una alerta"),
    confirmacion = confirm("Hola esto es una confirmación"),
  aviso = prompt("Hola esto es un aviso y le permite al usuario ingresar un valor");


console.log(alerta);

console.log(confirmacion);
console.log(aviso);
