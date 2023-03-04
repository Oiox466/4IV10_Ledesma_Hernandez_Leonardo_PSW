function validarN(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d{10} .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
  }
  
function prestamo() {
    let dinero = document.getElementById("dinero").value;
    let tiempo = document.getElementById("tiempo").value;
    let interes = 0.23 / 12;
  
    if (dinero < 1000 || dinero > 10000000 || tiempo < 0 || tiempo > 4) {
      alert("No digas locuras Mary Jane");
      return false;
    } else {
      dinero = parseFloat(dinero);
      tiempo = parseInt(tiempo) * 12;
      let abono = dinero / tiempo;
      let interesation;
      let final = dinero;
      let cuota = abono + (final * interes);
      
      let tabla = document.getElementById("tabla");
      tabla.innerHTML = "";
      
      for (let i = 0; i < tiempo; i++) {
        interesation = final * interes;
        final = final - abono + interesation;
        dinero = dinero - abono;
        
        let fila = document.createElement("tr");
        fila.innerHTML = `
          <td class="no">${i+1}</td>
          <td>${dinero.toFixed(2)}</td>
          <td>${interesation.toFixed(2)}</td>
          <td>${cuota.toFixed(2)}</td>
          <td>${final.toFixed(2)}</td>
        `;
        tabla.appendChild(fila);
      }
      
      return true;
    }
}