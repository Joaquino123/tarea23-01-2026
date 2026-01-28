const plataforma={
    nombre:"intelflix",
    plan:"premium",
    usuario:{
        nombre:"Miguel Angel",edad:18
    },
    perfiles:[
        {nombre:"Joaquin", favoritos:["Marvel","hostal"],historial:["hostal"]},
        {nombre:"Freid", favoritos:["La cas cafe", "it","stranger things"], historial:["it2"]}
    ]
}
console.log("usuario: ",plataforma.usuario.nombre)

let plan="basico";

if(plataforma.plan===plan){
    plataforma.plan=plan;
}
let otraSerie="Dragon Ball";

for(let i=0; i<plataforma.perfiles.length;i++){
    let encontrado=false;
    for(let j=0;j<plataforma.perfiles[i].favoritos.length;j++){
        if(plataforma.perfiles[i].favoritos[j]===otraSerie){
            encontrado=true;
            break;
        }
    }
    if(encontrado==false){
        plataforma.perfiles[i].favoritos.push(otraSerie)
    }
}
for(let i=0;i<plataforma.perfiles.length;i++){
    if(plataforma.perfiles[i].favoritos.length>0){
        for(let j=0;j<plataforma.perfiles[i].favoritos.length;j++){
            console.log(plataforma.perfiles[i].favoritos[j])
        }
    }
}
if(plataforma.usuario.edad>17){
    console.log("es mayor")
}else{
    console.log("es menor")
}