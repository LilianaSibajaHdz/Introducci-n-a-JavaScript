//declaro la variable nota

let nota = 200;

if (nota > 0 && nota <=100){
    if (nota >= 90){
        console.log("Tu nota es: " + nota + ". ¡Excelente! Has aprobado.");
    }
    else if (nota >= 75){
        console.log("Tu nota es: " + nota + ". ¡Bien! Has aprobado.");
    }
    else if (nota >= 60){
        console.log("Tu nota es: " + nota + ". ¡Suficiente! Has aprobado.");
    }
    else{
        console.log("Tu nota es: " + nota + ". Lo siento, no has aprobado.");
    }

}else{
    console.log("Error: La nota " + nota + " no es válida. Debe ser un número entre 1 y 100.");
}