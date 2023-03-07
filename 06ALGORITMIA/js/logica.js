function validarN(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d{10} .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

//Problema 1
function problema1(){
    //Vamos a obtener la entrada de los datos
    var p1_input = document.querySelector('#p1-input').value;
    //Lo que necesitamos es separar todo por comas
    var p1_palabras = p1_input.split(' ');

    //Necesitamos una funcion que se encargue de recuperar cada palabra
    // Tengo que eliminar los espacios

    p1_palabras = p1_palabras.map(function (palabra){
        return palabra.replace(/\s/g,'').toUpperCase();
    });

    // Hay que invertir las palabras
    var p1_resp = '';

    // Una funcion que se encargue de invertir cada palabra
    p1_palabras.forEach(function(palabra, i){
        var palabra_invertida = '';
        var palabra_array = palabra.split('');

        // Debo iterar la palabra_array para invertir la palabra
        for (var j = palabra_array.length - 1; j >= 0; j--) {
            palabra_invertida += palabra_array[j];
        }

        // Vamos a contar la salida
        p1_resp += 'Palabra: ' + palabra + ' = ' + palabra_invertida + '\n';
    });

    // imprimir salida
    document.querySelector('#p1-output').textContent = p1_resp; 
}

//Problema 2
function problema2() {
    // Obtenemos los valores de los inputs
    const x1 = parseInt(document.getElementById('p2-x1').value);
    const x2 = parseInt(document.getElementById('p2-x2').value);
    const x3 = parseInt(document.getElementById('p2-x3').value);
    const x4 = parseInt(document.getElementById('p2-x4').value);
    const x5 = parseInt(document.getElementById('p2-x5').value);
    
    const y1 = parseInt(document.getElementById('p2-y1').value);
    const y2 = parseInt(document.getElementById('p2-y2').value);
    const y3 = parseInt(document.getElementById('p2-y3').value);
    const y4 = parseInt(document.getElementById('p2-y4').value);
    const y5 = parseInt(document.getElementById('p2-y5').value);
    
    // Calculamos el producto escalar
    let producto_escalar = (x1*x2*x3*x4*x5) + (y1*y2*y3*y4*y5);

    // Mostramos el resultado
    document.getElementById('p2-output').textContent = "El producto escalar es de: " + producto_escalar;
}

//Problema 3
function problema3(){
  var alfabetos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  //Vamos a obtener la entrada de los datos
  var p3_input = document.querySelector('#p3-input').value;
  //Lo que necesitamos es separar todo por comas
  var p3_palabras = p3_input.split(',');

  //Necesitamos una funcion que se encargue de recuperar cada palabra
  // Tengo que eliminar los espacio

  p3_palabras = p3_palabras.map(function (palabra){
      return palabra.replace(/\s/g,'').toUpperCase();
  });

  // Hay que calcular los caracteres únicos
  var p3_resp = '';

  // Una funcion que se encargue de calcular que contienen el arreglo y seprar cada caracter y contarlo
  p3_palabras.forEach(function(palabra, i){
      var letras_unicas = [];
      var palabra_array = palabra.split('');

      // Debo iterar la palabra_array para contar las letras únicas
      palabra_array.forEach(function(letra, j){
          // Comprobar que la letra esté dentro del alfabeto
          if (alfabetos.includes(letra)) {
              // si la letra no la hemos contado la agregamos a un array para contar las letras únicas
              if (!letras_unicas.includes(letra)) {
                  letras_unicas.push(letra);
              }
          }
      });

      // Vamos a contar la salida
      p3_resp += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
  });

  // imprimir salida
  document.querySelector('#p3-output').textContent = p3_resp; 
}