
let persona = {
    nombre:"Joaquin",
    edad:19,
    altura:1.78,
    esEstudiante:false
};

if(persona.esEstudiante){
    console.log("Es estiudiante")
}else{
    console.log("no es")
}

if(persona.edad>17){
    console.log("es mayor")}else{
    console.log("no es mayor")
}

console.log("Nombre: ",persona.nombre," Altura en cm: ",persona.altura*100)
console.log("edad en 5 años", persona.edad+5)
console.clear()
