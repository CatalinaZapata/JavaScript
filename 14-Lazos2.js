const presupuesto = 300;
const datos = [
    {
        "ciudad":"Bogotá",
        "precio":"500"
    },
    {
        "ciudad":"Lima",
        "precio":"400"
    },
    {
        "ciudad":"Santiago",
        "precio":"300"
    },
    {
        "ciudad":"Montevideo",
        "precio":"200"
    }
];

//for(let i = 0; precioCiudad[i] > presupuesto; i++){}

let i = 0;
let ciudadSeleccionada = "";
do{
    if(datos[i].precio <= presupuesto){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    } 
    i++;
} while(i < datos.length && ciudadSeleccionada == '')

if (ciudadSeleccionada == ''){
    console.log("No tenemos pasajes");
} else{console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);}