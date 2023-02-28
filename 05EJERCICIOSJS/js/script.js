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
        tipo = tipo.toLowerCase();
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

function Ecuatro() {
    //Variables
    let parcial1 = document.getElementById("parcial1").value;
    let parcial2 = document.getElementById("parcial2").value;
    let parcial3 = document.getElementById("parcial3").value;
    let examenfinal = document.getElementById("examenfinal").value;
    let trabajofinal = document.getElementById("trabajofinal").value;
  
    //validor
    let validor = /\D\./;
  
    //Validacion extra
    if (
      validor.test(parcial1) ||
      validor.test(parcial2) ||
      validor.test(parcial3) ||
      validor.test(examenfinal) ||
      validor.test(trabajofinal)
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      //Parseo de datos
      parcial1 = parseFloat(parcial1);
      parcial2 = parseFloat(parcial2);
      parcial3 = parseFloat(parcial3);
      examenfinal = parseFloat(examenfinal);
      trabajofinal = parseFloat(trabajfFinal);
  
      //Proceso
      if (
        parcial1 >= 0 &&
        parcial2 >= 0 &&
        parcial3 >= 0 &&
        examenfinal >= 0 &&
        trabajofinal >= 0
      ) {
        if (
          parcial1 <= 10 &&
          parcial2 <= 10 &&
          parcial3 <= 10 &&
          examenfinal <= 10 &&
          trabajofinal <= 10
        ) {
          //Variables Finales
          let promedioParciales;
          let porcentajeParciales;
          let porcentajeExamenfinal;
          let porcentajeTrabajofinal;
          let calificacionFinal;
  
          //Calculos
          promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
          alert(
            "Tu promedio de los parciales es: " + promedioParciales.toFixed(2)
          );
          porcentajeParciales = promedioParciales * 0.55;
          porcentajeExamenfinal = examenfinal * 0.3;
          porcentajeTrabajofinal = Trabajofinal * 0.15;
          calificacionFinal =
            porcentajeParciales + porcentajeExamenfinal + porcentajeTrabajoFinal;
          alert("Tu calificacion final es: " + calificacionFinal.toFixed(2));
          return true;
        } else {
          alert("Ingresa calificaciones validas");
          return false;
        }
      } else {
        alert("Ingresa una calificacion valida ");
        return false;
      }
    }
}

function Ecinco() {
    //Variables
    let hombres = document.getElementById("hombre").value;
    let mujeres = document.getElementById("mujer").value;
  
    //validor
    const validor = /\D/;
  
    //Validacion extra
    if (validor.test(hombres) || validor.test(mujeres)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      //Parseo de datos
      hombres = parseInt(hombres);
      mujeres = parseInt(mujeres);
  
      //Proceso
      if (hombres >= 0 && mujeres >= 0 && hombres <= 50 && mujeres <= 50) {
          //Variables Finales
          let porcentajeHombres;
          let porcentajeMujeres;
          let totalPersonas;
  
          //Calculos
          totalPersonas = hombres + mujeres;
          porcentajeHombres = (hombres / totalPersonas) * 100;
          porcentajeMujeres = (mujeres / totalPersonas) * 100;
          let Texto5 = "Con " + totalPersonas + " personas, el " + porcentajeHombres.toFixed(0) + "% hombres y " + porcentajeMujeres.toFixed(0) + "% mujeres";
          document.getElementById("resultado-5").value = Texto5; 
      } 
      else {
        alert("Ingresa una cantidad coherente");
        return false;
      }
    }
}

function Eseis() {
    let ingresoNacimiento = document.getElementById("fecha").value;
    let nacimientoIngresado = new Date(ingresoNacimiento);
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth();
    let añoActual = fechaActual.getFullYear();
    let edadAño;
    let edadMes;
  
    if (!!nacimientoIngresado.valueOf()) {
      año = parseInt(nacimientoIngresado.getFullYear());
      mes = parseInt(nacimientoIngresado.getMonth());
      dia = parseInt(nacimientoIngresado.getDate());
    }
  
    if (año > añoActual || año < "1940") {
      alert("No se puede ingresar ese año ");
      return false;
    } else {
      edadAño = añoActual - año;
      edadMes = mesActual - mes;
  
      if (edadMes < 0) {
        edadAño--;
      }
      let Texto6 ="Tu edad es de: " + edadAño + " años";
      document.getElementById("resultado-6").value = Texto6;
    }
}

function Esiete() {
    let numero1 = document.getElementById("numerouno").value;
    let numero2 = document.getElementById("numerodos").value;
    let resultado;
    let validor = /\D/;
  
    if (validor.test(numero1) || validor.test(numero2)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
      if (numero1 < 1000 || numero2 < 1000) {
        let Texto7;
        if (numero1 > numero2) {
          resultado = Math.pow(numero1, numero2);
          Texto7="El numero mayor es: " + numero1 + " entonces el resultado de la operacion es: " + resultado;
          document.getElementById("resultado-7").value = Texto7;
        } else if (numero2 > numero1) {
          resultado = numero2 / numero1;
          Texto7="El numero mayor es: " + numero2 +" entonces el resultado de la operacion es: " +resultado;
          document.getElementById("resultado-7").value = Texto7;
        } else if (numero2 == numero1) {
          resultado = numero1 * numero2;
          Texto7 = "Los numeros son iguales entonces el resultado de la operacion es: " + resultado;
          document.getElementById("resultado-7").value = Texto7;
        }
      } else {
        alert("Ingresa numeros menores a 1000");
        return false;
      }
    }
}

function Eocho() {
    let numerouno = document.getElementById("numberOne").value;
    let numerodos = document.getElementById("numberTwo").value;
    let numerotres = document.getElementById("numberThree").value;
    let mayor;
    let validor = /\D/;
  
    if (
      validor.test(numerouno) ||
      validor.test(numerodos) ||
      validor.test(numerotres)
    ) {
      alert("Ingresa números positivos y enteros");
      return false;
    } else {
      mayor = Math.max(numerouno, numerodos, numerotres);
      let Texto8 ="El numero mayor es: " + mayor;
      document.getElementById("resultado-8").value = Texto8;
    }
}

function Enueve() {
    let salario = document.getElementById("payment").value;
    let horasTrabajadas = document.getElementById("hours").value;
    let horasSobrantes;
    let horasDoble;
    let horasTriple;
    let pago;
    let pagoExtra;
    let pagoDoble;
    let pagoTriple;
    let pagoTotal;
    let validor = /\D/;
  
    if (
      validor.test(salario) ||
      validor.test(horasTrabajadas) ||
      salario == 0 ||
      horasTrabajadas == 0
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      if (horasTrabajadas > 40) {
        pagoExtra = true;
      } else {
        pagoExtra = false;
      }
  
      if (
        salario > 0 &&
        salario < 999999 &&
        horasTrabajadas > 0 &&
        horasTrabajadas < 100000
      ) {
        if (pagoExtra == true) {
          horasSobrantes = horasTrabajadas - 40;
          if (horasSobrantes > 8) {
            horasTriple = horasSobrantes - 8;
            horasDoble = horasSobrantes - horasTriple;
            pagoDoble = horasDoble * (salario * 2);
            pagoTriple = horasTriple * (salario * 3);
            pago = 40 * salario;
            pagoTotal = pago + pagoDoble + pagoTriple;
          } else {
            horasDoble = horasSobrantes;
            pagoDoble = horasDoble * (salario * 2);
            pago = 40 * salario;
            pagoTotal = pago + pagoDoble;
          }
        } else {
          pagoTotal = horasTrabajadas * salario;
        }
        let Texto9 = "Tu pago de todo es: $" + pagoTotal;
        document.getElementById("resultado-9").value = Texto9;
      } else {
        alert("Ingresa datos validos");
        return false;
      }
    }
}
  
function Ediez() {
    let salario = parseInt(document.getElementById("lastment").value);
    let antiguedad = parseInt(document.getElementById("years").value);
    let utilidad;
    let pago;
    let validor = /\D/;
  
    if (validor.test(salario) || validor.test(antiguedad)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      if (antiguedad > 0 && antiguedad < 70) {
        if (salario > 0 && salario < 999999) {
          if (antiguedad < 1) {
            utilidad = 0.05;
          } else if (antiguedad >= 1 && antiguedad <= 2) {
            utilidad = 0.07;
          } else if (antiguedad >= 2 && antiguedad <= 5) {
            utilidad = 0.1;
          } else if (antiguedad >= 5 && antiguedad <= 10) {
            utilidad = 0.15;
          } else if (antiguedad > 10) {
            utilidad = 0.2;
          }
          pago = salario * utilidad;
          let Texto10 = "Tu utilidad es: $" + pago.toFixed(3);
          document.getElementById("resultado-10").value = Texto10;
        } else {
          alert("Ingresa un salario valido");
          return false;
        }
      } else {
        alert("Ingresa unos años validos");
        return false;
      }
    }
}