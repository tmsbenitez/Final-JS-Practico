// CALCULOS Y FORMULAS
// ===================

// FORMULAS CUADRADO

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// FORMULAS RECTANGULO

function perimetroRectangulo(lado1, lado2) { 
    return 2 * (lado1 + lado2);
}

function areaRectangulo (lado1, lado2) {
    return lado1 * lado2;
}

// FORMULAS TRIANGULO

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return ((base * altura) / 2).toFixed(2);
}

function esIsosceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        const altura = Math.sqrt((lado1 ** 2) - (base ** 2) / 4 );
        console.log('aca')
        console.log(altura)
        return altura.toFixed(2);
    } else {
        return NaN;
    }
}

// FORMULAS CIRCULO

const PI = Math.PI;

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
    return ((radio * radio) * PI).toFixed(2);
}



// LLAMADAS
// ========

// CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    const result = document.getElementById('resultSquare')
    result.innerHTML = 'RESULTADO: ' + perimetro + ' cm';
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    const result = document.getElementById('resultSquare')
    result.innerHTML = 'RESULTADO: ' + area + ' cm';
}

// RECTANGULO

function calcularPerimetroRectangulo() {
    const lado1 = parseInt(document.getElementById('inputRectangulo1').value);
    const lado2 = parseInt(document.getElementById('inputRectangulo2').value);
    const value = perimetroRectangulo(lado1, lado2);

    const result = document.getElementById('resultRectangle')
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

function calcularAreaRectangulo() {

    const lado1 = document.getElementById('inputRectangulo1').value;
    const lado2 = document.getElementById('inputRectangulo2').value;
    const value = areaRectangulo(lado1, lado2);

    const result = document.getElementById('resultRectangle')
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

// TRIANGULO

function calcularPerimetroTriangulo () {
    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputTriangulo3').value);

    const value = perimetroTriangulo(lado1, lado2, base);

    const result = document.getElementById('resultTriangle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

function calcularAlturaIsosceles () {
    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputTriangulo3').value);

    const value = esIsosceles(lado1, lado2, base);

    const result = document.getElementById('resultTriangle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

function calcularAreaTriangulo () {
    const base = parseInt(document.getElementById('inputTriangulo3').value);
    const altura = parseInt(document.getElementById('inputTriangulo4').value);

    const value = areaTriangulo(base, altura);

    const result = document.getElementById('resultTriangle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

// CIRCULO

function calcularPerimetroCirculo () {
    const radio = parseInt(document.getElementById('inputCirculo').value);

    const value = perimetroCirculo(radio);

    const result = document.getElementById('resultCircle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

function calcularDiametroCirculo () {
    const radio = parseInt(document.getElementById('inputCirculo').value);

    const value = diametroCirculo(radio);

    const result = document.getElementById('resultCircle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm';
}

function calcularAreaCirculo () {
    const radio = parseInt(document.getElementById('inputCirculo').value);

    const value = areaCirculo(radio);

    let text = '2'
    let sup = text.sup();

    const result = document.getElementById('resultCircle');
    result.innerHTML = 'RESULTADO: ' + value + ' cm' + sup;
}