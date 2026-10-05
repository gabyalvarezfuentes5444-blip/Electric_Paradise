// ELEMENTOS DEL FORMULARIO

var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var cantidad = document.getElementById("cantidad")
var total = document.getElementById("total")

// PARA CALCULAR EL TOTAL

function calcularTotal() {
    var precio = tipo.value;
    var numero = cantidad.value;
    var resultado = precio * numero;

    total.textContent = resultado + "$";
}

tipo.addEventListener("change", calcularTotal);
cantidad.addEventListener("change", calcularTotal);
