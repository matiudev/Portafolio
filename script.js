function enviarCorreo() {
  // Aquí puedes agregar el código para enviar un correo electrónico utilizando JavaScript o alguna biblioteca de correo electrónico.
  // Por ejemplo:
  window.location.href = "mailto:matiiasalberto.22@gmail.com";
}

function copiarCorreo() {
  var correo = "matiiasalberto.22@gmail.com"; // Tu dirección de correo electrónico
  navigator.clipboard.writeText(correo).then(function() {
      document.getElementById("copy-icon").style.display = "none";
      document.getElementById("check-icon").style.display = "inline";
      setTimeout(function() {
          document.getElementById("check-icon").style.display = "none";
          document.getElementById("copy-icon").style.display = "inline";
      }, 3000); // Cambia el icono de nuevo después de 1 segundo
  });
}