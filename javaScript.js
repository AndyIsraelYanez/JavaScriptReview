let nombre ;
let edad ;
let equipo ;


function Bienvenida (nombre,edad,equipo){

    console.log(`BUenas tardes, comunicamos que el jugador ${nombre} con la edad de ${edad} llega al equipo mas garnde del Ecuador 
    ${equipo}`);

}

Bienvenida("Andy",22,"LIga Deportiva Universitaria");

//funcion declarada


function declared (){

    console.log(`ESta es una funcion donde se la puede inciializar desde cualquier `)
}


declared();

//funcion expresada

// FuncionExpresada();

const FuncionExpresada = function (){
    console.log(`ESta es una funcion que esta dentro de una variable , por lo tanto 
    no se la puede inicializar antes  de la misma  solo depsues .,,,,,,,ReferenceError: Cannot access 'FuncionExpresada' before initialization`)
}



FuncionExpresada();