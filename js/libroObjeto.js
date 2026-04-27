const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function crearLibroDesdeConsola() {
    console.log("--- Registro de nuevo libro ---");

    readline.question('Título del libro: ', (titulo) => {
        readline.question('Autor: ', (autor) => {
            readline.question('Año de publicación: ', (anio) => {
                readline.question('Estado (disponible/prestado): ', (estado) => {
                    
                    const libro = {
                        titulo: titulo,
                        autor: autor,
                        anio: parseInt(anio),
                        estado: estado,
                        capitulos: [],

                        describirLibro: function() {
                            console.log(`\n Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
                        },

                        agregarCapitulo: function(nombreCapitulo) {
                            this.capitulos.push(nombreCapitulo);
                            console.log(`✅ Capítulo añadido.`);
                        },

                        eliminarCapitulo: function() {
                            if (this.capitulos.length > 0) {
                                let borrado = this.capitulos.pop();
                                console.log(`🗑️ Capítulo "${borrado}" eliminado.`);
                            } else {
                                console.log("⚠️ No hay capítulos para borrar.");
                            }
                        },
                        
                        listarCapitulos: function() {
                            console.log("\n--- LISTA DE CAPÍTULOS ---");
                            if (this.capitulos.length === 0) {
                                console.log("(Lista vacía)");
                            } else {
                                this.capitulos.forEach((cap, i) => console.log(`${i + 1}. ${cap}`));
                            }
                            console.log("--------------------------");
                        }
                    };

                    libro.describirLibro();
                    
                    pedirCapitulos(libro);
                });
            });
        });
    });
}

function pedirCapitulos(libro) {
    readline.question('\nEscribe el nombre de un capítulo (o presiona Enter para terminar de agregar): ', (cap) => {
        if (cap.trim() !== "") {
            libro.agregarCapitulo(cap);
            pedirCapitulos(libro); // Se llama a sí misma para pedir otro
        } else {
            libro.listarCapitulos();
            preguntarEliminar(libro);
        }
    });
}

function preguntarEliminar(libro) {
    readline.question('\n¿Deseas eliminar el último capítulo agregado? (si/no): ', (resp) => {
        if (resp.toLowerCase() === 'si') {
            libro.eliminarCapitulo();
            libro.listarCapitulos();
            preguntarEliminar(libro); // Volver a preguntar si quiere seguir borrando
        } else {
            console.log("\n¡Perfecto! Así quedó tu libro final:");
            libro.describirLibro();
            libro.listarCapitulos();
            readline.close();
        }
    });
}

crearLibroDesdeConsola();