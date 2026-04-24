const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`--- "${titulo}" se ha guardado con éxito. ---`);
}

function mostrarLibrosLeidos() {
    console.log("\n======= Lecturas Leídas =======");
    if (librosLeidos.length === 0) {
        console.log("Aún no has agregado libros.");
    } else {
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
    console.log("=============================\n");
}

function iniciarSeguimiento() {
    readline.question('Escribe el nombre de un libro (o escribe "fin" para terminar): ', (libro) => {
        if (libro.toLowerCase() === 'fin') {
            mostrarLibrosLeidos();
            readline.close();
        } else {
            agregarLibro(libro);
            iniciarSeguimiento(); // Volvemos a preguntar
        }
    });
}

console.log("¡Bienvenido!");
iniciarSeguimiento();