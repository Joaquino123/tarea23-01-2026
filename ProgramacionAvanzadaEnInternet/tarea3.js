let alumno = {
    nombre:"Joaquin",
    semestre:6,
    cal1:10,
    cal2:9.6,
    cal3:9.9
}
let prom=(alumno.cal1+alumno.cal2+alumno.cal3)/3

let passed=alumno.prom>=6;

console.log("promedio: ",prom);
console.log("¿Aprovado?",passed)