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
                
                    
                });
            });
        });
    });
}

crearLibroDesdeConsola();