const $formulario = document.querySelector("#carta-a-santa");
const $botonEnviarForm = document.querySelector("#enviar-carta")

function validarNombre(nombre){
    if (nombre.length === 0){
        return `El campo nombre debe tener como mínimo 1 caracter alfabético`;
    }
    else if (nombre.length >= 50){
        return `El campo nombre no puede superar los 50 caracteres`;
    }
    else if(!/^[A-z]+$/.test(nombre)){
        return `El campo nombre solo acepta caracteres alfabeticos`;
    }

    return "";
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return `Tenes que seleccionar una ciudad`;
    }

    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return `Tenes que dar una descripción del regalo que te gustaría recibir`;
    }
    else if (descripcionRegalo.length >= 100){
        return `Te pasaste un poquito, tratá de escribirlo en menos de 1000 caracteres`;
    }
    else if (!/^[A-z0-9,\._ ]+$/.test(descripcionRegalo)){
        return `El campo solo puede tener numeros y letras`;
    }

    return "";
}

function manejarErrores(errores){

    const keys = Object.keys(errores);
    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            $formulario[key].className="error";

            const $error = document.createElement("li");
            $error.innerText = error;
            const $listaErrores = document.querySelector("#errores");
            $listaErrores.appendChild($error);
        }else{
            $formulario[key].className="";
        }
    });
}


function validarFormulario(event){
    const $listaErrores = document.querySelector("#errores");
        $listaErrores.innerHTML = "";

    const nombre = $formulario.nombre.value;
    const ciudad = $formulario.ciudad.value;
    const descripcionRegalo = $formulario["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre : errorNombre,
        ciudad : errorCiudad,
        "descripcion-regalo" : errorDescripcionRegalo
    }

    manejarErrores(errores);

    event.preventDefault();
}

$botonEnviarForm.onclick = validarFormulario;