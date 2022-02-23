class Operacion{
    protected valorA:number;
    protected valorB:number
    protected resultado:number;
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }

    set ValorA(value:number){
        this.valorA = value;
    }
    set ValorB(value:number){
        this.valorB = value;
    }
    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Sumar(){
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion{
    Restar(){
        this.resultado = this.valorA - this.valorB;
    }
}

let operacionSuma = new Suma();
operacionSuma.ValorA = 45;
operacionSuma.ValorB = 10;
operacionSuma.Sumar();
console.log("El resultado de la suma es " + operacionSuma.Resultado);

let operacionResta = new Resta();
operacionResta.ValorA = 45;
operacionResta.ValorB = 15;
operacionResta.Restar();
console.log("El resultado de la resta es " + operacionResta.Resultado);

