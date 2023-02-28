//Problema 1
function problema1(){
    
}

//Problema 2
function problema2(){

}

//Problema 3
function problema3(){
    var alfabetos = ['A-Z','Ñ'];

    //Vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;
    //Lo que necesitamos es separar todo por comas
    var p3_pabalbras = p3_input.split(',');

    //Necesitamos una funcion que se encargue de recuperar cada palabra
    // Tengo que eliminar los espacio

    p3_pabalbras = p3_pabalbras.map(function (palabras){
        return palabras.replace(/\s/g,'').toUpperCase();
    });

    // Hay que calcular los caracteres únicos
    var p3_resp = '';

    // Una funcion que se encargue de calcular que contienen el arreglo y seprar cada caracter y contarlo
    p3_pabalbras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        // Debo iterar el alfabeto
        alfabetos.forEach(function(letra,j){
            // Itero cada palabra
            palabra_array.forEach(function(letras_palabras,k){
                // Comprobar que la letra esté dentro del alfabeto
                if(letras_palabras == lectura){
                    // si la letra no la hemos contado la agregamos a un array para contar las letras únicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        // Vamos a contar la salida
        p3_resp += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    // imprimir salida
    document.querySelector('#p3-output').textContent = p3_resp; 
}