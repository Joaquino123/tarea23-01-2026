let monto = 999;
let saldo = 1000;

function cajero(opcion, monto) {
    switch (opcion) {
        case "consultar":
            console.log("Su saldo es de " + monto + "$")
            break;
        case "depositar":
            saldo += monto;
            console.log("saldo ahora: ",saldo)
            break;
        case "retirar":
            if((saldo-monto)<1){
                console.log("No tienes saldo suficiente")
            }else{
                saldo -= monto;
                console.log("saldo ahora: ",saldo)
            }
            break;
    }
}
cajero("retirar",monto)