// Crear un sistema de compra para prendas de ropas con diferentes opciones

class Remera{
    constructor(nombre, id, talle, precio){
        this.nombre = nombre
        this.id = id
        this.color = talle
        this.precio = precio 
    }
}

// Declarar remeras

const basica = new Remera("Basica", 1, "S", 5000)
const basicaRoja = new Remera("Basica Roja", 2, "M", 5000)
const angelGuardia = new Remera("Angel Guardia", 3, "M", 7800)
const angelGuardiaNegra = new Remera ("Angel Guardia Negra", 4, "XL", 8000)

// Opciones de la remeras

let elegirRemera = parseInt(prompt("Escoja el numero de la remera que desea agregar al carrito. 1-Basica 2-Basica roja 3-Angel de la guardia 4-Angel de la guardia negra" ))

// Escoger remeras
let infoRemera

let remeraElegida = false

while(remeraElegida === false){
    if(elegirRemera === 1){
        remeraElegida = true
        infoRemera = basica
    }
    else if (elegirRemera === 2){
        remeraElegida = true
        infoRemera = basicaRoja
    }
    else if (elegirRemera === 3){
        remeraElegida = true
        infoRemera = angelGuardia
    }
    else if (elegirRemera === 4){
        remeraElegida = true
        infoRemera = angelGuardiaNegra
    }
    else {
        elegirRemera = parseInt(prompt("Escoja el numero de remera correcta. 1-Basica 2-Basica roja 3-Angel de la guardia 4-Angel de la guardia negra" ))
    }
}

alert("Elegiste la remera " +infoRemera.nombre +" su valor es de " +infoRemera.precio)

console.log("infoRemera", infoRemera)

// Calcular el envio y sumarselo a el precio de la remera elegida

class codigoPostal{
    constructor(provincia, codigoPostal, precioEnvio){
    this.provincia = provincia
    this.codigoPosta = codigoPostal
    this.precioEnvio = precioEnvio
 }
}

const entreRios = new codigoPostal("Entre Rios", 2854, 1500)
const buenosAires = new codigoPostal("Buenos Aires", 3354, 500)
const chubut = new codigoPostal("Chubut", 6645, 2800)

//Ingresar codigo postal

let elegirCodigo = parseInt(prompt("Ingrese su codigo postal, hacemos envio solo a: 2854 - 3354 - 6645"))

//Bucle para escoger codigo postal

let infoEnvio

let codigoElegido= false

while(codigoElegido === false){
    if(elegirCodigo === 2854){
        codigoElegido = true
        infoEnvio = entreRios
    }
    else if (elegirCodigo === 3354){
        codigoElegido = true
        infoEnvio = buenosAires
    }
    else if (elegirCodigo === 6645){
        codigoElegido = true
        infoEnvio = chubut
    }
    else {
        elegirCodigo = parseInt(prompt("El codigo ingresado es incorrecto o no realizamos envio, por favor ingrese uno correcto: 2854 - 3354 - 6645"))
    }
}

alert("Su envio sera a " +infoEnvio.provincia +" su valor es de " +infoEnvio.precioEnvio)

console.log("infoEnvio", infoEnvio)

//Calucular el precio total



function calcularTotal(){
    const precioTotal = infoEnvio.precioEnvio + infoRemera.precio
    return precioTotal
}

let precioTotal = calcularTotal()

alert("Su total es de: " +precioTotal)

//cuotas

const alContado = calcularCuotas(precioTotal, 1, 0)
const cuotas3 = calcularCuotas(precioTotal, 3, 0)
const cuotas6 = calcularCuotas(precioTotal, 6, 10)


function calcularCuotas(precioTotal, cantCuotas, intereses){
    const cuotas = ((precioTotal /100)+intereses)*100 / cantCuotas
    return cuotas
} 

//Elegir cuotas 

let elegirCuotas = parseInt(prompt("Escoja su metodo de compra: (1) Al contado " +alContado +" (2) 3 Cuotas  de " +cuotas3 +" (3) 6 Cutoas de " +cuotas6))


let cuotaElegida= false

while(cuotaElegida === false){
    if(elegirCuotas === 1){
        cuotaElegida = true
    }
    else if (elegirCuotas === 2){
        cutotaElegida = true
    }
    else if (elegirCuotas === 3){
        cuotaElegida = true
    }
    else {
        elegirCuotas = parseInt(prompt("Escoja su metodo de compra CORRECTO: (1) Al contado " +alContado +" (2) 3 Cuotas  de " +cuotas3 +" (3) 6 Cutoas de " +cuotas6))
    }
}


