const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];
const precioCiudad = [500,400,300,200];
const presupuesto = 390;


//for(let i = 0; precioCiudad[i] > presupuesto; i++){}

let i = 0;
do{i++;//Le estoy inidcando al bucle que se repita si la ciudad es más cara, luego se guarda el i, la segunda condicion es para que el loop se detenga
} while(precioCiudad[i] > presupuesto  && i < ciudadesDisponibles.length)

if (i == ciudadesDisponibles.length){
    console.log("No tenemos pasajes");
} else{console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);}

