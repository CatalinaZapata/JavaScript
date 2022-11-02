const ciudadDestino = "Bogotá";
const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];
let edadPasajero = 17;
let estaAcompañado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (edadPasajero >= 18 || estaAcompañado){
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
        console.log("Pasaje disponible para venta");
    } else{
        console.log("Ciudad no disponible")
    } 
} else{
    if (edadPasajero >= 16 && ciudadDestino=="Lima"){
        } else{
            console.log("Pasajero no cumple condiciones")
        }
}

