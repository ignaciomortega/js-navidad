const $formulario = document.querySelector("#carta-a-santa");

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;


function validarNombre(nombre){
    if (nombre.length === 0){
        return `Este campo debe tener como mínimo 1 caracter alfabético`;
    }
    else if (nombre.length >= 50){
        return `Este campo no puede superar los 50 caracteres`;
    }
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return `Tenes que seleccionar una ciudad`;
    }
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return `Tenes que dar una descripción del regalo que te gustaría recibir`;
    }
    else if (descripcionRegalo.length >= 1000){
        return `Te pasaste un poquito, tratá de escribirlo en menos de 1000 caracteres`;
    }
}