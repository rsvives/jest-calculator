num1 = null;
num2 = null;
op = null;
resultado = null;

function test() {
    return "ok";
}
function suma(n1, n2) {
    return n1 + n2;
}
function resta(n1, n2) {
    return n1 - n2;
}
function multiplicacion(n1, n2) {
    return n1 * n2;
}
function division(n1, n2) {
    return n1 / n2;
}
function clickNumero(n) {
    if (this.resultado != null) {
        borrarPantalla();
    }

    if (this.op === null) {
        this.num1 = añadirCifra(n, this.num1);
        // pintarPantalla("primerNum", this.num1);
    } else {
        this.num2 = añadirCifra(n, this.num2);
        // pintarPantalla("segundoNum", this.num2);
    }
}

function añadirCifra(cifra, num) {
    return num * 10 + cifra;
}

function obtenerOperacion(o) {
    this.op = o;
    console.log({ op });
    pintarPantalla("operacion", o);
}

function operar() {
    switch (op) {
        case "+":
            resultado = suma(num1, num2);
            break;
        case "-":
            resultado = resta(num1, num2);
            break;
        case "x":
            resultado = multiplicacion(num1, num2);
            break;
        case "/":
            resultado = division(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
            break;
    }
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    pintarPantalla("resultado", resultado);
}
function pintarPantalla(elemento, valor) {
    document.getElementById(elemento).innerHTML = valor;
}
function borrarPantalla() {
    this.num1 = null;
    this.num2 = null;
    this.op = null;
    this.resultado = null;
    pintarPantalla("primerNum", "");
    pintarPantalla("segundoNum", "");
    pintarPantalla("operacion", "");
    pintarPantalla("resultado", "");
}

const calculadora = {
    num1,
    num2,
    op,
    resultado,
    test,
    suma,
    resta,
    multiplicacion,
    division,
    clickNumero,
    obtenerOperacion,
    operar,
    añadirCifra,
    pintarPantalla,
    borrarPantalla,
};
module.exports = calculadora;