const frutas = ["fresa", "pera", "fresa", "naranja", "pera", "manzana","kiwi"];

const conteo = {};

let i = 0;

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];

  if (conteo[fruta]) {
    conteo[fruta]++;
  } else {
    conteo[fruta] = 1;
  }
}

console.log(conteo);