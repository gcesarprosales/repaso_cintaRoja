/*
                            Objetos Literales
-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------

let myPenguin = {
    character: 'Captain Cook',
    origin: 'Mr. Poppers Penguins',
    author: 'Richar and Florence Atwater',
    notes: 'Childrens book about a housepainter who ends up while a flock of pinguins',
    saludo: function () {
        return 'Hola, soy el pinguino llamado '+this.character+'!!' 
    }


}
*/
/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------

console.log(myPenguin.saludo())
*/
/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------

myPenguin.puedoVolar = false;
*/
/*
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------

myPenguin.graznar = function(){
    console.log('kaww kaww!!')
}
console.log(myPenguin)
*/
/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/

/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------

myPenguin.character = 'Cesar'
console.log(myPenguin.saludo())
*/
/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("
-----------------------------------------------------------------------

myPenguin.volar = function(){
    this.puedoVolar == true
        ?console.log('Puedo volar')
        :console.log('No puedo volar')
    
}
myPenguin.volar();
*/
/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
-----------------------------------------------------------------------

myPenguin.puedoVolar = true;
myPenguin.volar()
*/

/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
-------------------------------------------------------------


let receta = {
    'titulo': 'Mole',
    'porciones': 2,
    'ingredientes': ['canela','comino','cocoa']
};

console.log (receta.titulo);
console.log ('Porciones: ' + receta.porciones);
console.log ('Ingrediente:');
for(var i = 0 ; i < receta.ingredientes.length; i++){
    console.log (i + ' .- ' + receta.ingredientes[i]);
}
*/

/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------


let libros = [
    {
        'titulo': 'Cien anios de soledad',
        'autor' : 'Gabriel Garcia Marquez',
        'leido': true
    },
    {
        'titulo' : 'Las batallas en el decierto',
        'autor' : 'Jose Emilio Pacheco',
        'leido' : false 
    }
];

for(let i = 0 ; i < libros.length ; i++){
    let libro = libros[i];
    let libroInfo = libro.titulo + ', escrito por: ' + libro.autor
    if(libro.leido){
        console.log('Ya has leido el libro: ' + libroInfo);
    } else {
        console.log('Te falta por leer el libro: ' + libroInfo);
    }
};
*/






















