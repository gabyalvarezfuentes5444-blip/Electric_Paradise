// HAMBURGUESA
var boton = document.getElementById("hamb");
var menu = document.getElementById("menu");

boton.addEventListener("click", function(){
    menu.classList.toggle("abierto");
});
