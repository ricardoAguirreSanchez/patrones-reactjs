import Tarea from './tarea.js'

export class TareaEscuela extends Tarea{
    constructor(nombre,prioridad,dificultad){
        super(nombre,prioridad); //con super, llamo al constructor del padre
        this.dificultad = dificultad;
    }

    mostrar(){
        return `${super.mostrar()} y es de dificultad ${this.dificultad}`
    }
}

