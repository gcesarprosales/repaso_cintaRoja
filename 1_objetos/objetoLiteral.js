//Declarar un objeto literal (son diferentes a las clases)
const ayudanteSanta = {
        //Atributos
    noPatas: 4,
    colo: 'cafe',
    raza: 'galgo',
        //Métodos
    ladrar: function(){         //Función anónima guardada en ladrar
        return 'wauuuuuuu'
    },
    correr: function(){         //Función anónima guardada en correr
        return 'Ayudante de Santa esta corriendo'
    }
}

console.log(ayudanteSanta.ladrar());
console.log(ayudanteSanta.correr());
