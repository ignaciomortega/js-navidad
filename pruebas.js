function probarValidarNombre(){
    console.assert(validarNombre("") === `Este campo debe tener como mínimo 1 caracter alfabético` , 
        `La validación de caracteres minimos no funcionó`);
    console.assert(validarNombre(`11111111111111111111111111111111111111111111111111`) === `Este campo no puede superar los 50 caracteres` , 
        `La validación de caracteres máximos falló`);
    console.assert(validarNombre("Nacho") === "",
         "La validación de un nombre correcto falló");
}
   
function probarValidarCiudad(){
    console.assert(validarCiudad("") === `Tenes que seleccionar una ciudad`, 
        `La validación de selección de ciudad falló`);
    console.assert(validarCiudad("La Pampa") === "", 
        "La validación de selección de ciudad en un caso válido falló");
}

function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo("") === `Tenes que dar una descripción del regalo que te gustaría recibir` , 
        `La validación de caracteres minimos para regalo falló`);
    console.assert(validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === `Te pasaste un poquito, tratá de escribirlo en menos de 1000 caracteres`, 
        `La validación de caracteres máximos para regalo falló`);
    console.assert(validarDescripcionRegalo("Quiero una bicicleta azul") === "", 
        "La validación de la descripcioón de un regalo válido falló");
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();