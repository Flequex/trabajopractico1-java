/*ejercicio 1*
alert ("un mensaje");

/*ejercicio 2*
document.write("hello world");

/*ejercicio 3*
document.write("la suma de 5+3 es " , 5+3);

/*ejercicio 4*
let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombreUsuario);

/*ejercicio 5*
let primerNumero = parseInt(prompt("Escriba el primer numero:"));
let segundoNumero = parseInt(prompt("Escriba un segundo numero:"));
alert("La suma de los dos numeros es: " + (primerNumero+segundoNumero));

/*ejercicio 6*
let numeroUno = parseInt(prompt("Ingrese un numero:"));
let numeroDos = parseInt(prompt("Ingrese otro numero:"));

if(numeroUno > numeroDos){
    document.write("El mayor de los dos numeros es: ", numeroUno);
}
else{
    document.write("El mayor de los dos numeros es : ", numeroDos);
}

/*ejercicio 7*
let numUno = parseInt(prompt("Ingrese el primer numero:"));
let numDos = parseInt(prompt("Ingrese el segundo numero:"));
let numTres = parseInt(prompt("Ingrese el tercer numero:"));
let maximo = 0;

if(numUno > numDos && numUno > numTres){
    maximo = numUno;
}
else{
    maximo = numTres;
}
if(numDos > numUno && numDos > numTres){
    maximo = numDos;
}
document.write("El mayor numero entre los tres ingresados es: ", maximo);

/*ejercicio 8*
let number = parseInt(prompt("Ingrese un numero para saber si es divisible por 2:"));

if(number % 2 == 0){
    document.write("El numero "  +  number + "  es divisible en 2");
    }
    else{
        document.write("El numero ingresado no es divisible en 2");
}

/*ejercicio 9*
let frase = prompt("Ingrese una frase");
for(i=0; i<frase.length; i++){
    let vocal = frase.charAt(i);
    if(vocal == "a" II vocal == "e" II vocal == "i" II vocal == "o" II vocal == "u" ){
        document.write(frase.charAt(i));
    }
}

/*ejercicio 10*
let numero1 = parseInt(prompt("Ingrese un numero"));

if(numero1 % 2 == 0){
    document.write("El numero es divisible en 2");
}
else if (numero1 % 3 == 0){
    document.write("El numero es divisible en 3");
}
else if (numero1 % 5 == 0){
    document.write("El numero es divisible en 5");
}
else if (numero1 % 7 == 0){
    document.write("El numero es divisible en 7");
}
else{
    document.write("El numero no es divisible en 2, ni 3, 5 o 7");
}




/*ejercicio 11*
let numero1 = parseInt(prompt("Ingrese un numero"));

if(numero1 % 2 == 0){
    document.write(`El numero ${numero1} es divisible en 2, `);
}
if(numero1 % 3 == 0){
    document.write(`El numero ${numero1} es divisible en 3, `);
}
if(numero1 % 5 == 0){
    document.write(`El numero ${numero1} es divisible en 5, `);
}
if(numero1 % 7 == 0){
    document.write(`El numero ${numero1} es divisible en 7, `);
}
if (numero1 % 2 != 0 & numero1 % 3 != 0 & numero1 % 5 != 0 & numero1 % 7 != 0){
    document.write("El numero no es divisible en 2, ni 3, 5 o 7");
}*/