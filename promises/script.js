let infoH1

const clickAplicarDescuento = () => {
    const aplicarDescuento = new Promise( ( resolve, reject  ) => {
        const descuento = true;
        setTimeout( () => {
            if ( descuento ) resolve( "Se aplicó el descuento" )
            else reject ( "no se pudo aplicar el descuento" )
        }, 1000)
    })

    aplicarDescuento.then( 
        mensaje => {
            console.log(mensaje);            
            infoH1.textContent = mensaje
            document.body.append( infoH1 )
        },
        error => {
            console.error(error);            
            infoH1.textContent = error
            document.body.append( infoH1 )
        }
    )
}

const main = () => {
    infoH1 = document.createElement("h1")
    infoH1.textContent = "Cargado"
    document.body.append( infoH1 )

    document.getElementById("btnDescuento").addEventListener( "click", clickAplicarDescuento )    
}

document.addEventListener("DOMContentLoaded", main)