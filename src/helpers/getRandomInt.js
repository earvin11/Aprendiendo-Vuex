
const getRandomInt = () => {
    return new Promise( resolve => {
        // Genera un numero random (Math.random()), de 0 a 2 (*20), sumale 1 para que nunca traiga 0 (+1)
        // envuelve todo en el Math.floor para redondear y solo tener enteros y almacenalo en la const rndInt
        const rndInt = Math.floor( (Math.random()* 20) + 1 )

        //Emite el resultado 1s despues
        setTimeout(() => {
            resolve( rndInt )
        }, 2000);
    })
}

export default getRandomInt