let btnPresiona = document.getElementById('Presiona');
let parrafoOculto = document.getElementById('parrafoOculto');
let contenedor = document.getElementById('contenedor');

btnPresiona.addEventListener('click',function() {
    parrafoOculto.style.display = 'block';
    contenedor.appendChild(parrafoOculto);
});