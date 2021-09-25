// Obteniendo el modal
var modal = document.getElementById("myModal");

// Obteniendo el boton
var btn = document.getElementById("myBtn");

// Obteniendo el boton para cerrar el modal
var span = document.getElementsByClassName("close")[0];

// Crear evento click para el boton
btn.onclick = function(){
    modal.style.display = "block";
}

// Cerrar el modal
span.onclick = function(){
    modal.style.display = "none";
}