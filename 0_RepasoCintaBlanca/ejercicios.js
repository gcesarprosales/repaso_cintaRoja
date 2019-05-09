/*
---------------------------------------------
1.- Hacer una arrow function que convierta de grados
    centígrados a Farenheit
---------------------------------------------


let farenheitToCelcius = (gradosFarenheit) => {
    return gradosFarenheit + '°F = ' + Math.round((gradosFarenheit-32)*(5/9)) + '°C';
}
console.log(farenheitToCelcius(100));
*/

/*
---------------------------------------------
2.- Hacer una función que muestre la tabla de
    multiplicar de un número
---------------------------------------------

let tablaDeMultiplicar = (numero) => {
    for(let i = 0 ; i <= 10 ; i++ ){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
    return null      //Siempre debe de regresar algo una funcion
}
tablaDeMultiplicar(5)
*/

/*
---------------------------------------------
3.- Función que pida N parametros y devuelva
    cuantos parámetros se le pasaron
---------------------------------------------
    El objeto "arguments" solo puede ser usado con las funciones
    clásicas; no puede ser utilizado dentro de arrow functions.
    En JS por convención, las llaves {} definen objetos y no arrays

function cuantosParametros (argumentos){
    return 'Esta funcion recibio ' + argumentos.length + ' argumentos';
}
console.log(cuantosParametros('cesar',123,true,null,{verdadero: true, falso: false},[10,20]));
*/

/*
---------------------------------------------
4.- Leer un arreglo de enteros y sacar su
    media y promedio
---------------------------------------------

let arregloEneros = [10,10,10,10,10]
let sumaPromedio = 0 ;
let sumaMedia = 0 ;

let obtenerPromedio = (arregloEneros) => {
    
    for(var i = 0 ; i < arregloEneros.length ; i ++){
        sumaPromedio += arregloEneros[i];       
    }

    return sumaPromedio/arregloEneros.length;
}

let obtenerMedia = (arregloEnteros) => {
    for (var  i = 0 ; i < arregloEneros.length; i ++){
        sumaMedia += arregloEneros[i];
    }
    return sumaMedia/2 ;
}

console.log(obtenerPromedio(arregloEneros));
console.log(obtenerMedia(arregloEneros));

*/

/*
---------------------------------------------
5.- Leer el nombre y sueldo de 8 empleados y
    mostrar el nombre y sueldo del empleado
    que más gana
---------------------------------------------

//Ejercicio con array function
let arregloNombreSueldo = ["Guillermo",21000,
                           "Cesar",14000,
                           "Perez",30000,
                           "Rosales",17000,
                            "Elena",30001];

let quienGanaMas = (arregloNombreSueldo) => {
    let nombreEmpleado = "";
    let sueldoEmpleado = 0;
    if(arregloNombreSueldo.length % 2 != 0){
        return "Debes introducir un arreglo con nombre y salario de cada empleado";
    }else{
        for(let i = 0 ; i < arregloNombreSueldo.length ; i += 2){
            if(sueldoEmpleado < arregloNombreSueldo[i + 1]){
                nombreEmpleado = arregloNombreSueldo[i];
                sueldoEmpleado = arregloNombreSueldo[i + 1];
            }
        }
        return "El empleado mejor pagado es: " + nombreEmpleado + ", con un sueldo de: " + sueldoEmpleado;
    }

}
console.log(quienGanaMas(arregloNombreSueldo));

//Ejercicio con function
let arregloNombreSueldo = ["Guillermo",21000,
                           "Cesar",14000,
                           "Perez",30000,
                           "Rosales",17000,
                            "Elena",30001];
function quienGanaMas(arregloNombreSueldo){
    let nombreEmpleado = "";
    let sueldoEmpleado = 0;
    if(arregloNombreSueldo.length % 2 != 0){
        return "Debes introducir un arreglo con nombre y salario de cada empleado";
    }else{
        for(let i = 0 ; i < arregloNombreSueldo.length ; i += 2){
            if(sueldoEmpleado < arregloNombreSueldo[i + 1]){
                nombreEmpleado = arregloNombreSueldo[i];
                sueldoEmpleado = arregloNombreSueldo[i + 1];
            }
        }
        return "El empleado mejor pagado es: " + nombreEmpleado + ", con un sueldo de: " + sueldoEmpleado;
    }
}
console.log(quienGanaMas(arregloNombreSueldo));
*/

/*
---------------------------------------------
6.- Guardar en un array los 20 primeros
    números pares
---------------------------------------------
let guardarNumerosPares = () => {
    let veinteNumerosPares = [];
    let indice = 0;
    for( let i = 0 ; indice < 20 ; i++ ){
        if(i % 2 == 0){
            veinteNumerosPares[indice] = i;
            console.log('Numero par: ' + i + ' guardado en el arreglo en el indice: ' + indice );
            indice++;
        }
    }
    return null;
}
console.log(guardarNumerosPares());
*/

/*
---------------------------------------------
7.- Hacer una funcion que calcule el tiempo
    necesario para que un automóvil que se
    mueve con una velocidad de 73000 m/h
    recorra una distancia de 120 km.
              (TIEMPO = d/v)
---------------------------------------------

//Declaración de objeto literal
let vocho = {
    velocidad : 73000
}

//function arrow
let calcularTiempo = (objetoAuto,distanciaKm) => {
    
    let tiempo = (distanciaKm/(objetoAuto.velocidad/1000))
    return 'El auto recorre ' + distanciaKm + ' km, en un tiempo de ' + tiempo + ' a la velocidad de ' + objetoAuto.velocidad + ' m/h'  

}

console.log(calcularTiempo(vocho,120)); //De argumentos pasamos el objeto literal vocho y los km recorridos
*/

/*
---------------------------------------------
8.- Crear una funcion que reciba como
    parametro una oración y defina si
    es palindromo
---------------------------------------------
*/

/*
---------------------------------------------
9.- Mostrar los primeros 10 dígitos de la
    serie Fibbonacci
---------------------------------------------
*/

/*
            Condicionales
---------------------------------------------
10.- Escribe una función que halle 
     el máximo entre dos números 
---------------------------------------------

let maximoDeDosNum = (num1,num2) => {
    if( num1 > num2 ){
        return num1
    }else{
        return num2
    }
}

//Declarando una funcion
function maximoDeDosNum ( num1 , num2) {
    if(num1>num2){
        return num1
    }else{
        return num2
    }
}
console.log(maximoDeDosNum(15,10));
*/

/*
---------------------------------------------
11.- Escribe una función que halle 
     el máximo entre tres números
---------------------------------------------

let maximoDeTresNum = (num1, num2, num3) => {
    
    if(num1==num2 && num2==num3){
        return num1;
    }else if (num1>num2 && num1>num3){
        return num1;
    }else if(num2>num3){
        return num2;
    }else{
        return num3;
    }
}
console.log(maximoDeTresNum(3,3,3));
*/

/*
---------------------------------------------
12.- Escribe una función  que cheque si un 
     número es negativo, positivo o cero
---------------------------------------------

let queEs = (numero) => {
    if(numero === 0){
        return 'El numero ingresado es CERO'
    }else if(numero > 0 ){
        return 'El numero es positivo'
    }else return 'El numero es negativo'
}

console.log(queEs(-1));
*/

/*
---------------------------------------------
13.- Escribe una función para verificar si 
     un número es divisible entre 5 y 11 
     o no lo es
---------------------------------------------

let esDivisible = (numero) => { 
    if(numero%5 == 0 && numero%11 == 0 ){
        return 'El numero '+numero+' es divisible entre 5 y 11'
    }else{
        return 'El numero: '+numero+' NO es DIVISIBLE entre 5 y 11'
    }
}
console.log(esDivisible(55))
*/

/*
---------------------------------------------
14.- Escriba una función para ingresar 
     cualquier letra del alfabeto y verifique 
     si es vocal o consonante
---------------------------------------------

let checarLetra = (letra) => {
    //Verificando si es vocal
    if(letra == 'a' || letra == 'A' || letra == 'e' || letra == 'E' || letra == 'i' || letra == 'I' || letra == 'o' || letra == 'O' ||letra == 'u' || letra == 'u'){
        return 'La letra '+letra+' indroducida es una vocal'
    }else if (letra >= 'b' && letra <= 'z' || letra >= 'B' && letra <= 'Z'){
        return 'La letra  '+letra+'  instroducida es una consonante'
    }else{
        return 'Debes introducir una letra del alfabeto'
    }
}

console.log(checarLetra('A'))
*/


/*
            Ciclos For
---------------------------------------------
15.- Escribe una función que imprima todos
     los números naturales de 1 hasta n
---------------------------------------------

let imprimirNumerosNaturales = (n) => {
    for(let i = 0 ; i <= n ; i++){
        console.log(i);
    }
    return null
}

imprimirNumerosNaturales(1010)
*/

/*
---------------------------------------------
16.- Escribe una función que imprima todos
     los números naturales en reversa, 
     desde n hasta 1.
---------------------------------------------


let imprimirNumerosAlreves = (n) => {
    for(let i = n ; i >= 0 ; i-- ){
        console.log(i)
    }
    return null
}

imprimirNumerosAlreves(1010)
*/

/*
---------------------------------------------
17.- Escribe una función que imprima todos
     los números pares entre 1 y 100
---------------------------------------------

let imprimirNumerosPares = () => {
    for(let i = 1 ; i <= 100 ; i++){
        if( i%2 == 0){
            console.log(i);
            
        }
    }
}

imprimirNumerosPares()
*/

/*
---------------------------------------------
18.- Escribe una función que imprima todos
     los números nones entre 1 y 100
---------------------------------------------

let imprimirNumerosNones = () => {
    for(let i = 1 ; i <= 100 ; i++){
        if( i%2 != 0){
            console.log(i)
        }
    }
}
imprimirNumerosNones();
*/

/*
---------------------------------------------
19.- Escribe una función que halle la suma
     de todos los numeros naturales entre 
     1 y n
---------------------------------------------


let sumaNumerosNaturales = (n) => {
    let sumaTotal = 0;
    for(let i = 1 ; i <= n ; i++){
        sumaTotal += i;
    }
    return sumaTotal;
}
console.log(sumaNumerosNaturales(8));
*/


 










