var base = document.querySelector(".base");
var altura = document.querySelector(".altura");
var nombre = document.querySelector(".nombre");
function areaTriangulo(){
    area = (parseFloat(base.value) * parseFloat(altura.value)) / 2;
    document.getElementById("mostrar").innerHTML = `Hola ${nombre.value}, El Área del triángulo es: ${area.toFixed(2)}`;

    
}

var boton = document.querySelector("button");
boton.onclick = areaTriangulo;