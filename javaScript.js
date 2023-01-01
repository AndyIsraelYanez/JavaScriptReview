// let nombre ;
// let edad ;
// let equipo ;


// function Bienvenida (nombre,edad,equipo){

//     console.log(`BUenas tardes, comunicamos que el jugador ${nombre} con la edad de ${edad} llega al equipo mas garnde del Ecuador 
//     ${equipo}`);

// }

// Bienvenida("Andy",22,"LIga Deportiva Universitaria");
// +

// //funcion declarada


// function declared (){

//     console.log(`ESta es una funcion donde se la puede inciializar desde cualquier `)
// }


// declared();

// //funcion expresada

// // FuncionExpresada();

// const FuncionExpresada = function (){
//     console.log(`ESta es una funcion que esta dentro de una variable , por lo tanto 
//     no se la puede inicializar antes  de la misma  solo depsues .,,,,,,,ReferenceError: Cannot access 'FuncionExpresada' before initialization`)
// }



// FuncionExpresada();








// // ejemplo de un arreglo 



// const camisetas = ["blanca", "azul", "negra", "roja"]


// camisetas.forEach(function (id,a){

//     console.log(`<li ${id} >${a}</li>`) 
// })


// console.log(camisetas)




// ejemplo de objetos 



const Estudiante ={

    nombre: "Andy",
    apellido: "De la Cruz",
    edad: 22,
    Direccion:{
        callePrincipal: "San Carlos",
        calleSecundaria: "via principal"
    },

    saludar : function(){
        console.log(`Este es mi primner saludo, mi nombre es: ${this.nombre} ${this.apellido}
        tengo ${this.edad} años de edad, mi calle principal es ${this.Direccion.callePrincipal}
        `)

    }
}


Estudiante.saludar();


// if - else 

// crear un juego que verifique cada uno de las condiciones 


// dejame dormir de 0 a 5 am 
// buenos dias 6 a 11 am
// buenas tardes  12 a 6 pm
// buenas noches 7pm a 12 pm


// operador || que se puede cumplir la una opcion o la otra ,

//  && que se pude cumplir las ambas 
//  ! niega lo verdaero a falso y viceversa


let hora = 14;


if (hora >= 0 && hora <= 5) {
    console.log("ES de hora de ir a la cam----a");


} else if (hora >= 6 && hora <= 11) {

        console.log("BUenos dias liguistas");
      
    } else if(hora >= 12 && hora <= 18){
        console.log("Buenas tardes liguistas")


    }else if (hora >= 19 && hora <= 23){
        console.log("Buenas noches albos")
    }