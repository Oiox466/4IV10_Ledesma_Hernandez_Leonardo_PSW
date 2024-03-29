var puntuacion = 0;
// Funcion para validar el input
function validarHexadecimal(e) {
    var tecla = e.key;
    const patron = /^[0-9a-fA-F]*$/;
    if (!patron.test(tecla)) {
        return false;
    }
}

function sumbit(){
    var hexa = document.getElementById("hexadecimal").value;
    // Obtener el fondo del cuadro
    var cuadrado = document.getElementById("cuadrado-juego");
    var bgcolor = window.getComputedStyle(cuadrado).getPropertyValue("background-color");
    
    // Validación por si se modifica el HTML
    if(hexa.length < 6 || hexa.length > 6){
        alert("El hexadecimal tiene que ser de 6 caracteres");
    }
    else{
        // Transformar el hexadeximal a números
        var [r,g,b] = separarRGB(bgcolor);
        bgcolor = rgbAHex(r,g,b);

        if(hexa.toLowerCase() == bgcolor.toLowerCase()){
            final = 1000;
            alert("Felicidades acertaste el color, tal vez haciendo trampa -_-");
        }
        else{        
            var unohex,doshex,treshex,cuatrohex,cincohex,seishex;        
            switch (hexa.charAt(0).toLowerCase()) {
                case 'a':
                    unohex = 10;
                    break;
                case 'b':
                    unohex = 11;
                    break;
                case 'c':
                    unohex = 12;
                    break;
                case 'd':
                    unohex = 13;
                    break;
                case 'e':
                    unohex = 14;
                    break;
                case 'f':
                    unohex = 15;
                    break;
                default:
                    unohex = parseInt(hexa.charAt(0));
                    break;
            }
            
            switch (hexa.charAt(1).toLowerCase()) {
                case 'a':
                    doshex = 10;
                    break;
                case 'b':
                    doshex = 11;
                    break;
                case 'c':
                    doshex = 12;
                    break;
                case 'd':
                    doshex = 13;
                    break;
                case 'e':
                    doshex = 14;
                    break;
                case 'f':
                    doshex = 15;
                    break;
                default:
                    doshex = parseInt(hexa.charAt(1));
                    break;
            }

            switch (hexa.charAt(2).toLowerCase()) {
                case 'a':
                    treshex = 10;
                    break;
                case 'b':
                    treshex = 11;
                    break;
                case 'c':
                    treshex = 12;
                    break;
                case 'd':
                    treshex = 13;
                    break;
                case 'e':
                    treshex = 14;
                    break;
                case 'f':
                    treshex = 15;
                    break;
                default:
                    treshex = parseInt(hexa.charAt(2));
                    break;
            }
            
            switch (hexa.charAt(3).toLowerCase()) {
                case 'a':
                    cuatrohex = 10;
                    break;
                case 'b':
                    cuatrohex = 11;
                    break;
                case 'c':
                    cuatrohex = 12;
                    break;
                case 'd':
                    cuatrohex = 13;
                    break;
                case 'e':
                    cuatrohex = 14;
                    break;
                case 'f':
                    cuatrohex = 15;
                    break;
                default:
                    cuatrohex = parseInt(hexa.charAt(3));
                    break;
            }

            switch (hexa.charAt(4).toLowerCase()) {
                case 'a':
                    cincohex = 10;
                    break;
                case 'b':
                    cincohex = 11;
                    break;
                case 'c':
                    cincohex = 12;
                    break;
                case 'd':
                    cincohex = 13;
                    break;
                case 'e':
                    cincohex = 14;
                    break;
                case 'f':
                    cincohex = 15;
                    break;
                default:
                    cincohex = parseInt(hexa.charAt(4));
                    break;
            }

            switch (hexa.charAt(5).toLowerCase()) {
                case 'a':
                    seishex = 10;
                    break;
                case 'b':
                    seishex = 11;
                    break;
                case 'c':
                    seishex = 12;
                    break;
                case 'd':
                    seishex = 13;
                    break;
                case 'e':
                    seishex = 14;
                    break;
                case 'f':
                    seishex = 15;
                    break;
                default:
                    seishex = parseInt(hexa.charAt(5));
                    break;
            }          

            // Transformar el hexadecimal del fondo a números
            var unobg,dosbg,tresbg,cuatrobg,cincobg,seisbg;
            switch (bgcolor.charAt(0).toLowerCase()) {
                case 'a':
                    unobg = 10;
                    break;
                case 'b':
                    unobg = 11;
                    break;
                case 'c':
                    unobg = 12;
                    break;
                case 'd':
                    unobg = 13;
                    break;
                case 'e':
                    unobg = 14;
                    break;
                case 'f':
                    unobg = 15;
                    break;
                default:
                    unobg = parseInt(bgcolor.charAt(0));
                    break;
            }
            
            switch (bgcolor.charAt(1).toLowerCase()) {
                case 'a':
                    dosbg = 10;
                    break;
                case 'b':
                    dosbg = 11;
                    break;
                case 'c':
                    dosbg = 12;
                    break;
                case 'd':
                    dosbg = 13;
                    break;
                case 'e':
                    dosbg = 14;
                    break;
                case 'f':
                    dosbg = 15;
                    break;
                default:
                    dosbg = parseInt(bgcolor.charAt(1));
                    break;
            }

            switch (bgcolor.charAt(2).toLowerCase()) {
                case 'a':
                    tresbg = 10;
                    break;
                case 'b':
                    tresbg = 11;
                    break;
                case 'c':
                    tresbg = 12;
                    break;
                case 'd':
                    tresbg = 13;
                    break;
                case 'e':
                    tresbg = 14;
                    break;
                case 'f':
                    tresbg = 15;
                    break;
                default:
                    tresbg = parseInt(bgcolor.charAt(2));
                    break;
            }
            
            switch (bgcolor.charAt(3).toLowerCase()) {
                case 'a':
                    cuatrobg = 10;
                    break;
                case 'b':
                    cuatrobg = 11;
                    break;
                case 'c':
                    cuatrobg = 12;
                    break;
                case 'd':
                    cuatrobg = 13;
                    break;
                case 'e':
                    cuatrobg = 14;
                    break;
                case 'f':
                    cuatrobg = 15;
                    break;
                default:
                    cuatrobg = parseInt(bgcolor.charAt(3));
                    break;
            }

            switch (bgcolor.charAt(4).toLowerCase()) {
                case 'a':
                    cincobg = 10;
                    break;
                case 'b':
                    cincobg = 11;
                    break;
                case 'c':
                    cincobg = 12;
                    break;
                case 'd':
                    cincobg = 13;
                    break;
                case 'e':
                    cincobg = 14;
                    break;
                case 'f':
                    cincobg = 15;
                    break;
                default:
                    cincobg = parseInt(bgcolor.charAt(4));
                    break;
            }

            switch (bgcolor.charAt(5).toLowerCase()) {
            case 'a':
                seisbg = 10;
                break;
            case 'b':
                seisbg = 11;
                break;
            case 'c':
                seisbg = 12;
                break;
            case 'd':
                seisbg = 13;
                break;
            case 'e':
                seisbg = 14;
                break;
            case 'f':
                seisbg = 15;
                break;
            default:
                seisbg = parseInt(bgcolor.charAt(5));
                break;
            }

        //OPERADOR
            var res1,res2,res3,res4,res5,res6;
            res1 = parseInt(operador(unobg,unohex));
            res2 = parseInt(operador(dosbg,doshex));
            res3 = parseInt(operador(tresbg,treshex));
            res4 = parseInt(operador(cuatrobg,cuatrohex));
            res5 = parseInt(operador(cincobg,cincohex));
            res6 = parseInt(operador(seisbg,seishex));
            
            if(isNaN(res1)){
                res1 = 0;
            }
            if(isNaN(res2)){
                res2 = 0;
            }
            if(isNaN(res3)){
                res3 = 0;
            }
            if(isNaN(res4)){
                res4 = 0;
            }
            if(isNaN(res5)){
                res5 = 0;
            }
            if(isNaN(res6)){
                res6 = 0;
            }
            var final = parseInt((res1 + res2 + res3 + res4 + res5 + res6)/6)*10;
        }
        puntuacion = puntuacion + final
        document.getElementById("puntaje").value = "Puntaje: " + puntuacion;

        // Invocamos la función al final para que nos cambie el color;
        establecerColorFondoAleatorio();
        document.getElementById("hexadecimal").value = "";
    }
}

// funcion para reiniciar todo
function resetear(){
    puntuacion = 0;
    establecerColorFondoAleatorio();
}
// Necesitamos pasar el RGB a hexadecimal
function decAHex(d) {
    var hex = Number(d).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

// Se pasa cada término a rgb
function rgbAHex(R, G, B) {
    var redHex = decAHex(R);
    var greenHex = decAHex(G);
    var blueHex = decAHex(B);
    var hexColor = redHex + greenHex + blueHex;
    return hexColor;
}

function operador(bg,hex){
    if(bg === 0 || hex === 0) {
        return 0;
    }
    if(hex < bg){
        return (hex / bg)*100;
    }
    else if(bg < hex){
        return (bg / hex)*100;
    }
}

// Funcion que aleatoriza el color al cargar la página
function establecerColorFondoAleatorio() {
    var hexadecimales = '0123456789ABCDEF'; // Lista de valores de colores disponibles
    var colorFondo = '#'; // Color de fondo aleatorio
    for (var i = 0; i < 6; i++) {
        colorFondo += hexadecimales[Math.floor(Math.random() * 16)];// Índice aleatorio en la lista
    }
    var div = document.getElementById("cuadrado-juego"); // Obtener el elemento div
    div.style.backgroundColor = colorFondo; // Establecer el color de fondo aleatorio
}

function separarRGB(valorRGB) {
    var valores = valorRGB.substring(4, valorRGB.length-1).split(",");
    var r = parseInt(valores[0].trim());
    var g = parseInt(valores[1].trim());
    var b = parseInt(valores[2].trim());
    return [r, g, b];
}

function cambiarIdiomaEsp(){
    document.documentElement.lang = "es";
    document.getElementById("hexadecimal").setAttribute("placeholder", "Código hexadecimal");
    document.getElementById("puntaje").value = "Puntaje: " + puntuacion;
    document.getElementById("submit").value = "Enviar";
    document.getElementById("reiniciar").value = "Reiniciar";
    document.getElementById("title").textContent = "Desafío Cromático";
    document.getElementById("instrucciones").textContent = "El juego es simple, adivina el codigo hexadecimal del cuadrado en pantalla. El color hexadecimal se compone de 6 caracteres, cada par corresponde al grado de Rojo, Verde y Azul respectivamente, entre mayor el numero más clara la tonalidad, no existe objetivo, sólo es probar la habilidad para reconocer colores. Buena suerte!!!";
}

function cambiarIdiomaIng(){
    document.documentElement.lang = "en";
    document.getElementById("hexadecimal").setAttribute("placeholder", "Hexadecimal Code");
    document.getElementById("puntaje").value = "Score: " + puntuacion;
    document.getElementById("submit").value = "Submit";
    document.getElementById("reiniciar").value = "Restart";
    document.getElementById("title").textContent = "Cromatic Challenge";
    document.getElementById("instrucciones").textContent = "The game is simple, guess the hexadecimal code of the square on the screen. The hexadecimal color is made up of 6 characters, each pair corresponds to the degree of Red, Green and Blue respectively, the higher the number, the clearer the hue, there is no objective, it is only testing the ability to recognize colors. Good luck!!!";
}
  // Llamar a la función al cargar la página
window.addEventListener('load', establecerColorFondoAleatorio);