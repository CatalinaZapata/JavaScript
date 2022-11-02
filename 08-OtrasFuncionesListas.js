const ciudadesDisponibles = ["Bogotá","Lima","Santiago","Montevideo"];
console.log(`En la lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos`);
console.log(ciudadesDisponibles.sort());
console.log(`Santiago está en la posición: ${ciudadesDisponibles.indexOf("Santiago")}`)

ciudadesDisponibles.shift();//elimina 1°
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos`);

ciudadesDisponibles.pop();//elimina el ultimo
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos`);

const ciudadesFiltradas = ciudadesDisponibles.filter((e)=> e=="Lima");
console.log(ciudadesFiltradas);

console.log(ciudadesDisponibles.join("-"));

const colores = ["rojo", "azul"];

const listaCiudadesYColores = ciudadesDisponibles.concat(colores);;

console.log(listaCiudadesYColores);

