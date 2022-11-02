const ciudadDestino = "Lima";
const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];
const edadPasajero = 19;

//Operadores de comparacion
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && edadPasajero>=18){
    console.log("Pasaje disponible para venta");
} else{
    console.log("Ciudad no disponible")
}

const valorPasaje = "1000";
if (valorPasaje == 1000){
    console.log("El pasaje vale 1000")
}