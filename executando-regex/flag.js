// g  - global
// i - ignorar case nas letras

const texto = 'carros assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/));
console.log(texto.match(/C|ab/i));
console.log(texto.match(/ab|c/gi));