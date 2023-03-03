function saludo() {
    var nombre = prompt("Ingrese su nombre:");
    if (nombre == "") {
      alert("Por favor, ingrese su nombre.");
    } else {
      alert("Bienvenido/a, " + nombre + "!");
    }
  }