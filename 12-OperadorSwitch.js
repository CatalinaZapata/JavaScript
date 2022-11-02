const ciudadDestino = "xd";
const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];

let valorPasaje = 0;


/*if (ciudadesDisponibles.indexOf(ciudadDestino) >= -1){
    if (ciudadDestino == "Bogotá"){
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima"){
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago"){
        valorPasaje = 380;
    } else if (ciudadDestino == "Montevideo"){
        valorPasaje = 200;
    }
    
    console.log(`El valor pasaje es: ${valorPasaje}`);
} else{
    console.log(`No disponible`);
}*/

switch(ciudadDestino){
    case "Bogotá":
        valorPasaje = 500;
        break
    case "Lima":
        valorPasaje = 400;
        break
    case "Santiago":
        valorPasaje = 380;
        break
    case "Montevideo":
        valorPasaje = 200;
        break
    default:
        console.log(`No hay`);
        break
} if (valorPasaje > 0)
console.log(`El valor pasaje es: ${valorPasaje}`);


