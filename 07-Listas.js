const ciudadesDisponibles = ["Bogotá","Lima","Santiago"];
console.log(ciudadesDisponibles);

{
    ciudadesDisponibles.push("Montevideo");
    console.log(ciudadesDisponibles);

    ciudadesDisponibles.unshift("Quito");
    console.log(ciudadesDisponibles);

}

//Mostrando el primer elemento de la lista
console.log(ciudadesDisponibles[0]);

ciudadesDisponibles.splice(1,2,"rojo","azul");
console.log(ciudadesDisponibles);
