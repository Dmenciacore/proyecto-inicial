//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    
    return lado * 4;
}

function areaCuadrado(lado) {
    
    return lado * lado;
}

// console.log("Los lados del cuadrado miden: " + lado1 + "cm");
// console.log("El perímetro del cuadrado es de: " + perimetro + "cm");
// console.log("El área del cuadrado es de: " + area + "cm^2");

console.groupEnd();

//Código del Triángulo

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return (base + lado1) + lado2;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm."
// );
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
// console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");
// console.log("El area del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código Círculo

console.group("Circulos");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferenciaCirculo(radio) {

    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// console.log("El radio del círculo mide: " + radio + "cm.");
// console.log("El diámetro del círculo es de: " + diametro + "cm");
// console.log("El valor de PI es de: " + PI + ".");
// console.log("La circunferencia equivale a: " + circunferencia + "cm");
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();

//Código del Triángulo Isósceles

console.group("Triángulos Isósceles");

function alturaTriangulo(base, lado1, lado2) {
    const lados = lado1 * lado2;
    const baseMitad = (base / 2);
    const baseCuadrado = baseMitad * baseMitad;
    const restaLados = lados - baseCuadrado;
    const altura = Math.sqrt(restaLados); 
    return altura;
    // console.log("La altura del triangulo es de: " + altura);
}

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm."
// );
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");
// console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");
// console.log("El area del triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

// Aquí recibe el evento onClick

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado de " + value + " lados, es de: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado de " + value + " lados, es de: " + area);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputBaseTriangulo");
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const value1 = inputBase.value;
    const value2 = inputAltura.value;
    const area = areaTriangulo(value1, value2);
    alert("El área del triángulo es de: " + area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLadoTriangulo1");
    const inputLado2 = document.getElementById("InputLadoTriangulo2");
    const inputBase = document.getElementById("InputBaseTriangulo");
    const ladoTriangulo1 = parseInt(inputLado1.value);
    const ladoTriangulo2 = parseInt(inputLado2.value);
    const baseTriangulo = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo);
    alert("El perímetro del triángulo es de: " + perimetro);
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;
    const diametro = diametroCirculo(radio);
    alert("El díametro del circulo es de: " + diametro);
}

function calcularCircunferenciaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;
    const circunferencia = circunferenciaCirculo(radio);
    alert("La circunferencia del círculo es de: " + circunferencia);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");
    const radio = inputRadio.value;
    const area = areaCirculo(radio);
    alert("El área del círculo es de: " + area);
}

function calcularAlturaTriangulo() {
    const inputLadoIzquierdo = document.getElementById("InputLadoIzquierdo");
    const inputLadoDerecho = document.getElementById("InputLadoDerecho");
    const inputBaseTotal = document.getElementById("InputBaseTotal");
    const ladoIzquierdo = inputLadoIzquierdo.value;
    const ladoDerecho = inputLadoDerecho.value;
    const baseTotal = inputBaseTotal.value;

    if (ladoDerecho != ladoIzquierdo && ladoDerecho != baseTotal && ladoIzquierdo != baseTotal) {
        alert("Dos lados deben ser iguales.");
    } else {
        
    
    if (ladoIzquierdo == ladoDerecho) {
        if (baseTotal != ladoIzquierdo && baseTotal != ladoDerecho) {
            const altura = alturaTriangulo(baseTotal, ladoIzquierdo, ladoDerecho);
            alert("La altura del triángulo es de: " + altura + "cm.");
        } else {
            alert("Dos de los lados deben ser iguales");
        }
    } else if (ladoIzquierdo == baseTotal){
        if (ladoDerecho != ladoIzquierdo && ladoDerecho != baseTotal) {            
            const altura = alturaTriangulo(baseTotal, ladoIzquierdo, ladoDerecho);
            alert("La altura del triángulo es de: " + altura + "cm.");
        } else {
            alert("Dos de los lados deben ser iguales");
        }
    } else if (baseTotal == ladoDerecho) {
        if (ladoIzquierdo != ladoDerecho && ladoIzquierdo != baseTotal) {
            const altura = alturaTriangulo(baseTotal, ladoIzquierdo, ladoDerecho);
            alert("La altura del triángulo es de: " + altura + "cm.");
        } else {
            alert("Dos de los lados deben ser iguales");
        }
    }    
}}