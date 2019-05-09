/* DECLARACIONES DE VARIABLES */
var x = 1;  // operador = sirve para asignar un valor
            // opeardor == valida el dato que esta adentro
            // operador === valida el tipo de dato y el dato que esta adentro
            // operador <= menor igual 
var texto = 'Guillermo Cesar Perez Rosales';
let y = false; //Variable dde alcance locar a pomparacion de var que es de alcance global
const z = [1,'texto',true];   //Constante que nunca va a perder su valor (lista)
console.log(typeof z);
console.log(typeof texto);

/* DECLARAR LISTA */
console.log('Agregar valores a una lista')
const listAdd = []
console.log('Esta es la lista con ' + listAdd.length + ' elementos');
listAdd.push('Hola, ')
listAdd.push('como estan??')
listAdd.push('Saludos')
console.log(listAdd);


/* ESTRUCTURAS DE CONTROL */

/* IF */
console.log('Estructura de control IF');

const d = 3;
const e = '3';
 if ( d == e){
    console.log('Si son iguales');
 }else{
    console.log('No son iguales');
 }

/* TERNARIO */
console.log('Operador ternario');
var elvisVive = Math.PI > 4 ? "Sip" : "Nop";
console.log(elvisVive);
console.log('Tambien se puede usar el operador TERNARIO con mas de una operacion por caso separandolas por una coma y juntarlas entre parentesís');


 /* FOR */
console.log('Estructuta de control FOR');
const lista = [1,48,96,3,2,8,9,63,2,58,99];
for(var i = 0 ; i < lista.length ; i++ ){
    console.log(lista[i]);
} 

/* FUNCION ANONIMA en javascript */
console.log('Función anónima')
const miFuncion = function(num1,num2){
   return num1 + num2;
}
console.log(miFuncion(5,7));

/* Arrow function */
console.log('Arrow funtion   ( ) => { }');
let farenheitToCelcius = (farenheit) => {
   return farenheit + '°F = ' + Math.round((farenheit - 32)*(5/9)) + '°C'
}
console.log(farenheitToCelcius(100));