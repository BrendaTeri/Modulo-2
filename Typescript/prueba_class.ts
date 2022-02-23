class Persona {
    readonly nombre:string;
    readonly apellido:string;
    private añoNac:number;
    constructor(nombre:string, apellido:string){
        this.nombre= nombre;
        this.apellido= apellido;
    }
    get Nombre():string{
        return this.nombre;
    }
    set Nombre (nombre:string){
        nombre=this.nombre;
    }
    get Apellido():string{
        return this.apellido;
    }
    set Apellido (nombre:string){
        nombre=this.apellido;
    }
    public toString():string {
        return this.nombre + this.apellido;
    }
    public edad(añoActual:number):number {
        return (añoActual - this.añoNac);
    }
}