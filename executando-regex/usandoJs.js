const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,1,2,3';

const regNove = RegExp('9');
console.log('Métodos da RegExp...');

console.log(regNove.test(texto));
console.log(regNove.exec(texto));

const regLetras = /[a-f]/g;
console.log('Métodos da String...');

console.log(texto.match(regLetras));
console.log(texto.search(regLetras));
console.log(texto.replace(regLetras, 'achei'));
console.log(texto.split(regLetras));