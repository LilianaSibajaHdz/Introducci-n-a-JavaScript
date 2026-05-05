
const deslizadorLongitud = document.getElementById('deslizadorLongitud');
const textoValorLongitud = document.getElementById('valorLongitud');
const botonGenerarContrasena = document.getElementById('botonGenerar');
const pantallaResultado = document.getElementById('resultadoContrasena');

const coleccionCaracteres = {
    mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz",
    numeros: "0123456789",
    simbolos: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

deslizadorLongitud.addEventListener('input', () => {
    textoValorLongitud.textContent = deslizadorLongitud.value;
});

function crearNuevaContrasena() {
    let caracteresPermitidos = "";
    
    if (document.getElementById('mayusculas').checked) {
        caracteresPermitidos += coleccionCaracteres.mayusculas;
    }
    if (document.getElementById('minusculas').checked) {
        caracteresPermitidos += coleccionCaracteres.minusculas;
    }
    if (document.getElementById('numeros').checked) {
        caracteresPermitidos += coleccionCaracteres.numeros;
    }
    if (document.getElementById('simbolos').checked) {
        caracteresPermitidos += coleccionCaracteres.simbolos;
    }

    
    if (caracteresPermitidos === "") {
        alert("¡Por favor, selecciona al menos un tipo de carácter!");
        return;
    }

    let contrasenaFinal = "";
    const longitudDeseada = parseInt(deslizadorLongitud.value);


    for (let i = 0; i < longitudDeseada; i++) {
        const posicionAleatoria = Math.floor(Math.random() * caracteresPermitidos.length);
        contrasenaFinal += caracteresPermitidos[posicionAleatoria];
    }

    pantallaResultado.textContent = contrasenaFinal;
}

botonGenerarContrasena.addEventListener('click', crearNuevaContrasena);