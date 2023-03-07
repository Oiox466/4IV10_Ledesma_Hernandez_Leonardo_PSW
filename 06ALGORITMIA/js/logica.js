//Problema 1
// function problema1(){
//     var alfabetos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

//     //Vamos a obtener la entrada de los datos
//     var p1_input = document.querySelector('#p1-input').value;
//     //Lo que necesitamos es separar todo por comas
//     var p1_palabras = p1_input.split(' ');

//     //Necesitamos una funcion que se encargue de recuperar cada palabra
//     // Tengo que eliminar los espacio

//     p1_palabras = p1_palabras.map(function (palabra){
//         return palabra.replace(/\s/g,'').toUpperCase();
//     });

//     // Hay que calcular los caracteres únicos
//     var p1_resp = '';

//     // Una funcion que se encargue de calcular que contienen el arreglo y seprar cada caracter y contarlo
//     p1_palabras.forEach(function(palabra, i){
//         var letras_unicas = [];
//         var palabra_array = palabra.split('');

//         // Debo iterar la palabra_array para contar las letras únicas
//         palabra_array.forEach(function(letra, j){
//             // Comprobar que la letra esté dentro del alfabeto
//             if (alfabetos.includes(letra)) {
//                 // si la letra no la hemos contado la agregamos a un array para contar las letras únicas
//                 if (!letras_unicas.includes(letra)) {
//                     letras_unicas.push(letra);
//                 }
//             }
//         });

//         // Vamos a contar la salida
//         p1_resp += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
//     });

//     // imprimir salida
//     document.querySelector('#p1-output').textContent = p1_resp; 
// }
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
function problema2(){
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