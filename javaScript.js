// // let nombre ;
// // let edad ;
// // let equipo ;


// // function Bienvenida (nombre,edad,equipo){

// //     console.log(`BUenas tardes, comunicamos que el jugador ${nombre} con la edad de ${edad} llega al equipo mas garnde del Ecuador 
// //     ${equipo}`);

// // }

// // Bienvenida("Andy",22,"LIga Deportiva Universitaria");
// // +

// // //funcion declarada


// // function declared (){

// //     console.log(`ESta es una funcion donde se la puede inciializar desde cualquier `)
// // }
// // hello

// // declared();

// // //funcion expresada

// // // FuncionExpresada();

// // const FuncionExpresada = function (){
// //     console.log(`ESta es una funcion que esta dentro de una variable , por lo tanto 
// //     no se la puede inicializar antes  de la misma  solo depsues .,,,,,,,ReferenceError: Cannot access 'FuncionExpresada' before initialization`)
// // }



// // FuncionExpresada();








// // // ejemplo de un arreglo 



// // const camisetas = ["blanca", "azul", "negra", "roja"]


// // camisetas.forEach(function (id,a){

// //     console.log(`<li ${id} >${a}</li>`) 
// // })


// // console.log(camisetas)




// // ejemplo de objetos 



// const Estudiante = {

//     nombre: "Andy",
//     apellido: "De la Cruz",
//     edad: 22,
//     Direccion: {
//         callePrincipal: "San Carlos",
//         calleSecundaria: "via principal"
//     },

//     saludar: function () {
//         console.log(`Este es mi primner saludo, mi nombre es: ${this.nombre} ${this.apellido}
//         tengo ${this.edad} años de edad, mi calle principal es ${this.Direccion.callePrincipal}
//         `)

//     }
// }


// Estudiante.saludar();


// // if - else 

// // crear un juego que verifique cada uno de las condiciones 


// // dejame dormir de 0 a 5 am 
// // buenos dias 6 a 11 am
// // buenas tardes  12 a 6 pm
// // buenas noches 7pm a 12 pm


// // operador || que se puede cumplir la una opcion o la otra ,

// //  && que se pude cumplir las ambas 
// //  ! niega lo verdaero a falso y viceversa


// // let hora = 14;


// // if (hora >= 0 && hora <= 5) {
// //     console.log("ES de hora de ir a la cam----a");


// // } else if (hora >= 6 && hora <= 11) {

// //         console.log("BUenos dias liguistas");

// //     } else if(hora >= 12 && hora <= 18){
// //         console.log("Buenas tardes liguistas")


// //     }else if (hora >= 19 && hora <= 23){
// //         console.log("Buenas noches albos")
// //     }




// // switch - case 


// //     let dia = 0;


// // switch (dia) {
// //     case 0: 
// //     console.log("Domingo")
// //     break;

// //     case 1: 
// //     console.log("Lunes")
// //     break;

// //     case 2: 
// //     console.log("Martes")
// //     break;

// //     case 3: 
// //     console.log("Miercoles")
// //     break;

// //     case 4: 
// //     console.log("Jueves")
// //     break;

// //     case 5: 
// //     console.log("Viernes")
// //     break;

// //     case 6: 
// //     console.log("Sabado")
// //     break;

// //     default:
// //         break;
// // }


// // for 

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for (let i = 0; i < numeros.length; i++) {

//     console.log(numeros[i])
//         ;

// }


// // for in: sirve  por lo general para los objetos  permitiendo ietarra o recorrer cada uno de las propiedades del objeto


// const jugador = {

//     nombre: "Andy",
//     edad: 22,
//     equipo: "ldu"

// }


// for (const propiedades in jugador) {

//     // console.log(`propiedad : ${jugador[propiedades]}`);

//     console.log(`propiedad  ${propiedades}: ${jugador[propiedades]}`);

// }


// // for of : sirve  recorrer cada uno de los caracteres , que sea ierable es decir paertir


// let palabra = "hola mundo";




// for (const item of palabra) {

//     console.log(item)


// }


// // try catch captura de errores




// try {
//     let numero = "hola";

//     if (isNaN(numero)) {
//         throw new Error("el caracter introducido no es numero");

//     }

//     console.log(numero * numero)

// } catch (error) {

//     console.log(`Algo salio mal y es ; ${error}`)

// }



// clases: las clases son prototipos 

class Animal {

    constructor (nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }


    sonar(){
        console.log("hago bulla")
    }

    saludar(){
        console.log("que tal mundo")
    }


}
    


// la herencia es heredad un atributo de un padre general 


class Perro extends Animal{

    constructor(nombre,genero,tamanio){
        // el metodo  super  manda a llamar al constructor de la clase padre ;

        super(nombre,genero);
        this.tamanio = tamanio;
        this.raza = null;
        
        }

    sonar(){
        console.log("soy un perro y me gusta hacer ruido")
    }

    saludar(){
        console.log("Gua gua gua auuuuu")
    }

    
    correr(){
        console.log("soy muy rapido")
    }

    // metodo estatico

    static queEres(){
        console.log("soy un animal de cutatro patas y el amigo mas fiel del ser humano.")
    }

// metodo get  obtiene el atributo de la clase , para obtener (recuperar o acceder) el valor ya asignado a un atributo y utilizarlo para cierto método.
    get getRaza (){
        return this.raza;

    }
      // metodo set    da acceso a una propiedad  sirve para asignar un valor inicial a un atributo, pero de forma explícita
        
    set setRaza (raza){
        return this.raza = raza;
    }



    }

 
    const beican = new Animal("Beican", "macho"), 
    lazi =  new Perro("Lazy","hembra", "pequeña");


    Perro.queEres();
    console.log()
    console.log()
    
    lazi.setRaza = "esnauser"                              
    // console.log(beican);
    console.log(lazi)
    
    // beican.saludar();
    // beican.sonar();
    
    // lazi.saludar();
    // lazi.sonar();
    // lazi.correr();
    
    
    // metodo etaticos , getters y setters

     

