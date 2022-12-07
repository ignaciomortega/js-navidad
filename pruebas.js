function probarValidarNombre(){
    console.assert(validarNombre("") === `El campo nombre debe tener como mínimo 1 caracter alfabético` , 
        `La validación de caracteres minimos no funcionó`);
    console.assert(validarNombre(`11111111111111111111111111111111111111111111111111`) === `El campo nombre no puede superar los 50 caracteres` , 
        `La validación de caracteres máximos falló`);
    console.assert(validarNombre("Nacha$") === `El campo nombre solo acepta caracteres alfabeticos`,   
         "La validación de caractéres alfabeticos en nombre falló");
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
    console.assert(validarDescripcionRegalo("$123") === `El campo solo puede tener numeros y letras`, 
        `La validación contra caracteres inválidos falló`);
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();