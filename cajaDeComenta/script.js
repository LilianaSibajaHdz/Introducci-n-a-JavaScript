const boton = document.getElementById('btnAgregar');
const cajaTexto = document.getElementById('nuevoComentario');
const contenedor = document.getElementById('contenedorComentarios');

boton.addEventListener('click', function() {
    const texto = cajaTexto.value; 

    if (texto.trim() === "") {
        alert("Por favor, escribe algo antes de publicar.");
        return;
    }

    const parrafoNuevo = document.createElement('p');
    
    const ahora = new Date();
    const fechaHora = ahora.toLocaleString();

    parrafoNuevo.innerHTML = `<strong>[${fechaHora}]:</strong> ${texto}`;

    contenedor.appendChild(parrafoNuevo);

    cajaTexto.value = "";
});