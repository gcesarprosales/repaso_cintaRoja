class Perro{
    constructor(raza, color, nombre){
        //Definición de los atributos
        this.raza = raza
        this.color = color
        this.nombre = nombre
    }
    //Definicion de los metodos
    ladrar(){
        return 'Waau'
    }
    comer(comida){
        return `${this.nombre} esta comiendo ${comida}`
    }
    getColor(){
        return this.color
    }
    setColor(newColor){
        this.color = newColor
    }
    setPatas(numPatas){
        this.patas = numPatas
    }
    
}