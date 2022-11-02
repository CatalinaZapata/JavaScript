const ciudadDestino = "Bogotá";
const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];
let edadPasajero = 27;
let estaAcompañado = true;
let tienePasaporte = true;
let estaCasaso = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) >= -1 && edadPasajero >= 18 && tienePasaporte && !estaCasaso){
    console.log("Paquete para solteros disponible para venta");
} else{
    console.log("Ciudad no disponible o no cumple condiciones")
}