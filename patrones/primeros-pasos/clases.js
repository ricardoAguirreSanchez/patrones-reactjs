//-----------------clases--------
class Tarea {
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad
    }

    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`
    }
}


let tarea1 = new Tarea("Barrer","baja");
let tarea2 = new Tarea("Lavar","alta");


console.log(tarea1.mostrar());
console.log(tarea2.mostrar());

//------------------------------

class TareaEscuela extends Tarea{
    constructor(nombre,prioridad,dificultad){
        super(nombre,prioridad); //con super, llamo al constructor del padre
        this.dificultad = dificultad;
    }

    mostrar(){
        return `${super.mostrar()} y es de dificultad ${this.dificultad}`
    }
}


let tareaMatematica = new TareaEscuela("Resolver ejercicios","alta","nivel 3")
console.log(tareaMatematica.mostrar())

