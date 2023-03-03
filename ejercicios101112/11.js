var pedido = "pescado";
var bebida = "";

switch (pedido) {
  case "carne":
    bebida = "vino tinto";
    break;
  case "pescado":
    bebida = "vino blanco";
    break;
  case "verdura":
    bebida = "agua";
    break;
  default:
    console.log("Por favor, elija carne, pescado o verdura");
}

if (bebida !== "") {
  console.log("Para el plato de " + pedido + " recomendamos acompañarlo con " + bebida);
}


var frutas = ["manzana", "banana", "naranja"];

for (var i = 0; i < frutas.length; i++) {
  console.log("La fruta número " + (i+1) + " es " + frutas[i]);
}

frutas.push("pera");

for (var i = 0; i < frutas.length; i++) {
  console.log("La fruta número " + (i+1) + " es " + frutas[i]);
}