//Aquí le pedimos al usuario ingresar el numero de veces para ejecutar el Bucle
let entrada = parseInt(prompt("Ingresa hasta que numero deseas conocer"));


//Creamos el Bucle, se ejecutara mientras (i) sea menor a el numero ingresado = (entrada)
for(let i = 1; i <= entrada; i++){
    if(i % 2 == 0){                                 //Creamos la condición si i % 2 == 0 oséa el resto tiene que ser 0 para que sea par 
        document.write(`Numero Par '${i}' <br>`)
    }else{                                          //de lo contrario seran impares
        document.write(`Numero Impar '${i}' <br>`)
    }
}