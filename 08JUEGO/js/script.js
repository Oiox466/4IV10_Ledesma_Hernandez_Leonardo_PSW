// Funcion para validar el input
var puntuacion = 0;
function validarHexadecimal(e) {
    var tecla = e.key;
    var patron = /^[0-9a-fA-F]*$/;
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
        
        var [r,g,b] = separarRGB(bgcolor);
        bgcolor = rgbAHex(r,g,b);

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
        var final = parseInt((res1 + res2 + res3 + res4 + res5 + res6)/6)*10;
        
        puntuacion = puntuacion + final
        document.getElementById("puntaje").value = "Puntaje: " + puntuacion;
    }
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
    if(hex < bg){
        return (hex / bg)*100;
    }
    else if(bg < hex){
        return (bg / hex)*100;
    }
}

function establecerColorFondoAleatorio() {
    var colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']; // Lista de colores disponibles
    var indiceAleatorio = Math.floor(Math.random() * colores.length); // Índice aleatorio en la lista
    var colorFondo = colores[indiceAleatorio]; // Color de fondo aleatorio
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

  // Llamar a la función al cargar la página
window.addEventListener('load', establecerColorFondoAleatorio);