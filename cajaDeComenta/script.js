const boton = document.getElementById('btnAgregar');
const cajaTexto = document.getElementById('nuevoComentario');
const contenedor = document.getElementById('contenedorComentarios');

boton.addEventListener('click', function() {
    const texto = cajaTexto.value; 

    if (texto.trim() === "") {
        alert("Por favor, escribe algo antes de publicar.");
        return;
    }

    const divComentario = document.createElement('div');
    divComentario.classList.add('comentario-container');

    const ahora = new Date();
    const fechaHora = ahora.toLocaleString();
    const textoComentario = document.createElement('p');
    textoComentario.innerHTML = `<strong>[${fechaHora}]:</strong> ${texto}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add('btn-eliminar');

    btnEliminar.addEventListener('click', function() {
        divComentario.remove();
    });

    divComentario.appendChild(textoComentario);
    divComentario.appendChild(btnEliminar);
    contenedor.appendChild(divComentario);

    cajaTexto.value = "";
});