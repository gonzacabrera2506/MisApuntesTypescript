//BOOLEAN//
let bool: boolean = true;
console.log(bool);
//NUMBER//
let n1: number = 12.9;
let n2: number = 1489;
console.log(n1, n2);
//STRING//
let nombre1: string = "esto es un string";
let nombre2: string = 'y esto tambien es un string';
let concatenado: string = `${nombre1} ${nombre2}`;
console.log(concatenado);
//ARRAY//
let arrayString: string[] = ['hola', 'soy', 'gonzalo'];
let arrayNumber: number[] = [1, 2, 3];
console.log(arrayString);
console.log(arrayNumber);
//TUPLAS//
let datos: [string, number] = ["Hola", 12345];
console.log(datos);
//ENUM//
enum Estado {
    activo,
    inactivo,
    cualquiera = 5
}
console.log(Estado.activo, Estado.inactivo, Estado.cualquiera);
//ANY//
let cualquierValor: any = "HOLA SOY GONZALO";
console.log(cualquierValor);
//VOID//
function Saludar(): void {
    console.log("hola");
}
let valor = Saludar();
console.log(valor);//esto retorna undefined
//NULL Y UNDEFINED
/* null = ausencia de valor y es object
   undefined = se declaro la variable pero no se asigno valor
*/
//TYPE ASSERT
let valores: any = "Soy una cadena";
let resultado1: number = (<string>valores).length;
let reultado2: number = (valores as string).length;
//DESTRUCTURING DE ARRAY
let frutas: string[] = ['manzana', 'banana', 'pera'];
let [item1, item2, item3] = frutas;
console.log(item1);
console.log(item2);
console.log(item3);
//DESTRUCTURING DE TUPLAS
let persona: [string[], number, string, string[]];
persona = [['luis', 'gonzalez'], 31, 'masculino', ['musica', 'desarrollo']];
let [nombre, edad, genero, intereses] = persona;
console.log(nombre);
////////////////////////////////////////////////////////////////////
//////////////////PROGRAMACION ORIENTADA A OBJETOS//////////////////
//CLASES
/*
class Persona{
    //nombre: string; VOY A CREAR ESTA PROPIEDAD EN EL CONSTRUCTOR
    edad: number;
    fechaDeNacimiento: Date;
    esCasado: boolean;

    constructor(public nombre: string){
        this.nombre = nombre;
    }
}
let persona1 = new Persona('Gonzalo');
console.log(persona1);
*/
//HERENCIA
class Persona {
    nombre: string;
    edad: number;
}

class Estudiante extends Persona {
    numeroCarnet: number;
    constructor(numero: number) {
        super();
        this.numeroCarnet = numero;
    }
}
class Empleado extends Persona {
    numeroSeguro: number;
}
let estudiante = new Estudiante(1234);
let empleado = new Empleado();
//PUBLIC PRIVATE PROTECTED READONLY
class Alumno {
    private nombre: string;
    apellido: string;
    readonly edad: number;

    protected ObtenerNombre(): string {
        return this.nombre;
    }
}
let alumno = new Alumno();

class AlumnoLibre extends Alumno {
    nombreCompleto: string = this.ObtenerNombre();
}







