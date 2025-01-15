// importa a calculadora
var calculadora = require("./calculadora");

var mostrarSite = false;
const site = 'www.guiadoprogramador.com';

console.log('hello world');
console.log('meu nome é XXX e eu estou aprendendo NodeJs');

if (!mostrarSite) {
    console.log(site);
}

// imprime as contas da calculadora

console.log(calculadora.soma(10, 30));

var resultadoSoma = calculadora.soma(40, 5);
var resultadoSub = calculadora.subtracao(40, 5);
var resultadoMult = calculadora.multiplicacao(40, 5);
var resultadoDiv = calculadora.divisao(40, 5);

console.log(resultadoSoma);
console.log(resultadoSub);
console.log(resultadoMult);
console.log(resultadoDiv);