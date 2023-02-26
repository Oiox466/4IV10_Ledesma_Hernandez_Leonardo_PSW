/*
JavaScript es un lenguaje que posee un paradigma orientado a objetos y a funciones Y EVENTOS por tal motivo presenta una peculiaridad que es:

No tipado
no existe int, float, string, ni char, ni nada :(

todo es var -> variable
de acuerdo al estandar ES6 se manejan 3 tupos de variable

VAR
LET es una variable de tipo "Protected"
CONST -> valor constante
*/

function validar(formulario){
    //Nombre
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";
    var cadenaNombre = formulario.nombre.value;
    //alert(cadenaNombre);
    var todoesvalido = true;
    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //Edad
    var edad=parseInt(formulario.edad.value);
    if((edad <0) || (edad >=99)){
        alert("Ingresa una edad valida entre 1 y 99 años");
        formulario.edad.focus();
        return false;
    }
    var checarnum ="0123456789";
    var cadenaNum = formulario.edad.value;
    var todoesvalido2 = true;
    for(var i=0; i <cadenaNum.length; i++){
        var caracteres = cadenaNum.charAt(i);
        for(var j = 0; j < checarnum.length; j++){
            if(caracteres == checarnum.charAt(j)){
                break;
            }
        }
        if (j == checarnum.length){
            todoesvalido2 = false;
            break;
        }
    }
    if(!todoesvalido2){
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    //Fecha
    var nacimiento = new Date(formulario.fecha.value);
    const fecha = new Date();
    
    const yearactual = parseInt(fecha.getFullYear());
    const mesactual = parseInt(fecha.getMonth())+1;
    const diactual = parseInt(fecha.getDay())+1;
    alert(diactual)

    const yearnacimiento = parseInt(nacimiento.getFullYear());
    const mesnacimiento = parseInt(nacimiento.getMonth())+1;
    const dianacimiento = parseInt(nacimiento.getDay())+1;

    
    var prueba = yearactual-edad;

    if(yearactual < yearnacimiento){
        alert("Ingrese una fecha anterior a la actual")
        return false;
    }

    if(mesactual < mesnacimiento && yearactual <= yearnacimiento){
        alert("Ingrese una fecha anterior a la actual")
        return false;
    }

    if(diactual < dianacimiento){
        if(mesactual < mesnacimiento && yearactual <= yearnacimiento){
            alert("Ingrese una fecha anterior a la actual")
            return false;
        }
        if(yearactual < yearnacimiento){
            alert("Ingrese una fecha anterior a la actual")
            return false;
        }
    }

    if(prueba != nacimiento.getFullYear()){
        alert("La fecha no coincide con la edad")
        return false;
    }

    if(mesnacimiento == 2 && nacimiento.getDay() > 29){
        alert("Febrero no tiene más de 29 días")
        return false;
    }

    //Telefono
    var Telefono=parseInt(formulario.Telefono.value);
    if((Telefono <0) || (Telefono >=999999999)){
        alert("Ingresa un número de teléfono válido");
        formulario.Telefono.focus();
        return false;
    }
    var checartel ="0123456789";
    var cadenaTel = formulario.Telefono.value;
    var todoesvalido3 = true;
    for(var i=0; i <cadenaTel.length; i++){
        var caracteres = cadenaTel.charAt(i);
        for(var j = 0; j < checartel.length; j++){
            if(caracteres == checartel.charAt(j)){
                break;
            }
        }
        if (j == checartel.length){
            todoesvalido3 = false;
            break;
        }
    }
    if(!todoesvalido3){
        alert("Ingresa solo numeros en el campo");
        formulario.Telefono.focus();
        return false;
    }
}