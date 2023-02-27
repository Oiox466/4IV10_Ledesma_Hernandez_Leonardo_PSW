//Validacionees
function validarN(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d{10} .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarL() {
    var char = event.keyCode;
  
    if ((char > 64 && char < 91) || (char > 96 && char < 123) || char == 8)
      return true;
    else return false;
}

//Operaciones
function Euno(){
    let capital = document.getElementById("invertir").value;
    let meses = document.getElementById("meses").value;
    const validor =  /\D/;

    if(validor.test(capital) || validor.test(meses)){
        alert("Ingresa solo números enteros positivos");
        return false;
    }
    else{
        let interes;
        capital = parseFloat(capital);
        meses = parseInt(meses);
        if(meses > 0 && meses <= 36){
            if(capital > 0 && capital <= 1000000){
                for(let i = 0; i < meses; i++){
                    interes = capital * 0.08;
                    capital = capital + interes;
                }
                let Texto = "Con una inversión de " + meses + " meses, usted ganó $" + capital.toFixed(3); 
                document.getElementById("resultado-1").value = Texto
            }
            else{
                alert("Ingrese una cantidad razonable de dinero");
                return false;
            }
        }
        else{
            alert("Ingrese por favor una cantidad de meses válida");
            return false;
        }
    }
}

function Edos(){
    let sueldo = document.getElementById("pago").value;
    let ventas = document.getElementById("cantidad-ventas").value;
    const validor2 = /\D/;

    if(validor2.test(sueldo) || validor2.test(ventas)){
        alert("Ingrese una cantidad numérica");
        return false;
    }
    else{
        sueldo = parseFloat(sueldo);
        ventas = parseFloat(ventas);
        if(sueldo > 0 && sueldo <= 100000){
            if(ventas > 0 && ventas <= 100000){
                sueldo = sueldo + ventas/0.1;
                let impuestos = sueldo*0.12;
                sueldo = sueldo-impuestos;
                let Texto2 = "La ganancia total es de $"+sueldo.toFixed(3);
                document.getElementById("resultado-2").value = Texto2;
            }
            else{
                alert("El valor de las ventas es muy irreal");
                return false;
            }
        }
        else{
            alert("El valor del sueldo es muy irreal");
            return false;
        }
    }
}

function Etres(){
    let nombre = document.getElementById("Nproducto").value;
    let marca = document.getElementById("Mproducto").value;
    let tipo = document.getElementById("Tproducto").value;
    let precio = document.getElementById("Pproducto").value;
    const validor3 = /\D\./;
    const validor31 = /\d/;
    
    if(
        validor3.test(precio) || validor31.test(nombre || validor31.test(marca) || validor31.test(tipo))
    ){
        alert("Coloca los datos correctos");
        return false;
    }
    else{
        precio = parseFloat(precio);
        tipo = tipo.toLoweCase();
        if(precio > 0 && precio <= 20000){
            if(nombre != "" && marca != "" && tipo != ""){
                if(nombre.length < 20 && marca.length < 20 && tipo.length < 20){
                    let descuento;
                    let Texto3;
                    switch(tipo){
                        case "papas":
                            descuento = precio*0.02;
                            precio = precio-descuento;
                            Texto3 = nombre + " de " + marca + " cuenta con el descuento del 2%, costando " + precio.toFixed(3);
                            document.getElementById("resultado-3").value = Texto3;
                            break;
                        case "pastelito":
                            descuento = precio*0.1;
                            precio = precio-descuento;
                            Texto3 = nombre + " de " + marca + " cuenta con el descuento del 10%, costando " + precio.toFixed(3);
                            document.getElementById("resultado-3").value = Texto3;
                            break;
                        case "lacteo":
                            descuento = precio*0.075;
                            precio = precio-descuento;
                            Texto3 = nombre + " de " + marca + " cuenta con el descuento del 7.5%, costando " + precio.toFixed(3);
                            document.getElementById("resultado-3").value = Texto3; 
                            break;
                        default:
                            Texto3 = nombre + " de " + marca + " no cuenta con descuento, costando " + precio.toFixed(3);
                            document.getElementById("resultado-3").value = Texto3; 
                            break;
                    }
                    return true;
                }
                else{
                    alert("El nombre es muy largo");
                    return false;
                }
            }
            else{
                alert("Ingresa palabras");
                return false;
            }
        }
        else{
            alert("Pon el valor de un preecio razonable");
            return false;
        }
    }
}