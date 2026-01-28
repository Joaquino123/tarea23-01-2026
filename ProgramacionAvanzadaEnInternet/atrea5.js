const ticket = {
    id: "tck-001",
    titulo: "E4rror en impresora",
    estado: "abierto",
    prioridad: "alta",
    area: "sistemas",
    fecha: "2024-06-15-10:30:00",
    creador: {
        nombre: "Joaquin",
        email: "joaquino0525@gmail.com",
    },
    asignados: ["Andres", "ana"],

    comentarios: [
        { usuario: "ana", mensaje: "revisando el equipo" },
        { usuario: "andres", mensaje: "falta tóner" }
    ]
}
console.log("estado: ", ticket.estado, " título: ", ticket.titulo)
if (ticket.estado === "abierto") {
    ticket.estado = "cerrado";
}

let cometario = { usuario: "jorge", mensaje: "no vacio" }
if (cometario.mensaje !== "") {
    ticket.comentarios.push(cometario)
}

if (ticket.asignados.length > 0) {
    for (let i = 0; i < ticket.asignados.length; i++) {
        console.log(ticket.asignados[i])
    }
}

let prioridad = "alta";
if (prioridad == "alta" | prioridad == "media" | prioridad == "baja") {
    ticket.prioridad = prioridad;
}
let found=false;
for (let i = 0; i < ticket.comentarios.length; i++) {
    if (ticket.comentarios[i].usuario === "ana") {
        console.log("ana ya dejo un comentario")
        found=true;
        break;
    }
}
if(found==false){
    console.log("nana no dejo un comentario")
}




