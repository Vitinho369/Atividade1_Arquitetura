var scanf = require('scanf');

const converterMaiuculas = (texto) => texto.toUpperCase();

const removerEspacosExtras = (texto) => texto.replace(/\s+/g, " ");

const contarPalavras = (texto) => texto.split(' ').length;


console.log("Digite o texto: ");
let texto = scanf('%S');

texto = converterMaiuculas(texto);
texto = removerEspacosExtras(texto);
let quantidadePalavras = contarPalavras(texto);

console.log(quantidadePalavras);