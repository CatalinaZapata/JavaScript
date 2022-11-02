//Tipos de datos

//Alfanumerico
let nombrePasajero = "Pedro Silva";
    console.log(nombrePasajero);
nombrePasajero = "Ramon Silva";
    console.log(nombrePasajero);

//Numérico
let valorBoleto = 1000;
    console.log(valorBoleto);
const impuestoAeropuerto = 100;
const tasaEmbarque = 60/100;
var gestionAgencia = 100;

//Lógicos (true, false)
let boletoActivo = true;

//Operaciones aritmeticas
let totalBoletos = 1700 + 65.45 + 100;
    console.log(totalBoletos);
let totalBoletos2 = valorBoleto + valorBoleto * tasaEmbarque + gestionAgencia;
    console.log(totalBoletos2);
let totalBoletos3 = valorBoleto + impuestoAeropuerto * tasaEmbarque + gestionAgencia;
    console.log(totalBoletos3);
let totalBoletos4 = (valorBoleto + impuestoAeropuerto) * tasaEmbarque + gestionAgencia;
    console.log(totalBoletos4);
let totalBoletos5 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*tasaEmbarque + gestionAgencia;
    console.log(totalBoletos5);
let totalBoletos6 = valorBoleto + impuestoAeropuerto + valorBoleto + impuestoAeropuerto*tasaEmbarque + gestionAgencia;
    console.log(totalBoletos6);

//Concatenación de texto
let nombre_Pasajero = "Leonardo";
let apellidoPasajero = "Lacruz";
let nombreCompleto = nombre_Pasajero+apellidoPasajero;
console.log(nombreCompleto);
let pasaporte = "1000" + "12";
console.log(pasaporte);
let mulriplicacion = "1000" / "10";
console.log(mulriplicacion);
