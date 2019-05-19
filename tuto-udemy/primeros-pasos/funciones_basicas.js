//function expression
const sumaFE = function (a,b) {
    return a + b
}


//function declarative
function sumaFD(a,b){
    return a + b
}

//--------------------------

//OBJECT LITERAL
const PersonaOL = {
    nombre : "juan",
    edad: 34
}

//obtengo las key del ol
console.log(Object.keys(PersonaOL))

//OBJECT CONSTRUCTOR
function PersonaOC (nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

const persona1 = new PersonaOC("juan",35)

//--------------------------
let listaNombre = ["juan","pedro","pepe"]
console.log(listaNombre)

nuevaLista = [...listaNombre].reverse()
console.log(nuevaLista)

//------------------------

// funciones en arreglos
const personas = [
    {nombre:"juan",edad:44,uni:"UTNFRBA"},
    {nombre:"tomas",edad:22,uni:"UTNFRA"},
    {nombre:"pedro",edad:24,uni:"UTNFRLP"}
]

//filter
const personaMayores28 = personas.filter(unaPersona => {
    if (unaPersona.edad > 28){
        return unaPersona;
    }
})

console.log(personaMayores28)

//find
const pedro = personas.find(unaPersona => {
    return unaPersona.nombre = "pedro";
})

console.log(`Pedro tiene ${pedro.edad}`)

//reduce
const sum = personas.reduce((sumatoriaEdad, unaPersona) => {
    return unaPersona.edad + sumatoriaEdad;
},0)

console.log(`El total de edad es ${sum}`);

//-------------------------

//Promises
    //resolve sera lo que retorne en caso de ok, reject es el mensaje que ira en el error
const getUsers = (cantidad) => new Promise((resolve,reject) => {
    
    const url = `https://randomuser.me/api/?results=${cantidad}`;
    
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET",url,true);

    xhr.onload = () => {
        if (xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        }else{
            //si la api me responde con un error
            reject(`Error al consultar a la API - ${xhr.status}`)
        }
    }

    //si hay un error al hacer el send
    xhr.onerror = (error) => {
        reject(`Error al hacer el send a la API - ${error}`)
    }

    xhr.send();
})

//llamos a la funcion
getUsers(4).then(resultado => {
    let html = '';
    resultado.forEach(persona => {
        html += `<li>Nombre: ${persona.name.first} Email: ${persona.email} 
        Foto: <img src=${persona.picture.medium} alt="Smiley face"></li>`
    });
    document.getElementById("texto").innerHTML = `<ul>${html}</ul>`

}).catch(error => {
    console.log(`${error}`)
})


