// var número1, número2, resultado, opcion; //

let opcion = parseInt(prompt("Seleccione que desea hacer:\n 1.- Calcular cual número es mayor\n 2.- Sumar\n 3.- Restar\n 4.- Multiplicar\n 5.- Dividir\n 6.- Mostrar los números ingresados\n 7.- Salir"));

function mayormenor(){
    let numero1= parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    
    if (numero1>numero2){
        alert(`El numero ${numero1} es mayor que ${numero2}`);
    
    }else if (numero1<numero2){
        alert(`El numero ${numero2} es mayor que ${numero1}`);
    
    }else {
        alert("Los números son iguales ");
    }
}

function suma(){
    let numero1= parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    let resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado)
}

function resta(){
    let numero1= parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    let resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado)
}

function multiplicacion(){
    let numero1= parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    let resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado)
}

function division(){
    let numero1= parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    let resultado = numero1 / numero2;
    alert("El resultado de la división es: " + resultado)
}

function Mostrar(){
    let número1 = parseInt(prompt("Ingrese el primer número"));
    let número2 = parseInt(prompt("Ingrese el segundo número"));
    alert("Los números ingresados son: " + número1 + " y " + número2);
}

function Salir(){
    alert("Gracias por participar");
}

switch(opcion){
    
    case 1:
        mayormenor();
        break;

    case 2:
        suma();
        break;

    case 3:
        resta()
        break;

    case 4:
        multiplicacion();
        break;

    case 5:
        division();
        break;
    
    case 6:
        Mostrar();
        break;
    
    case 7:
        Salir();
        break;
    
    default:
        alert("Elección incorrecta. Adios!");
        break;
}