// 1- tabla de multiplicar los 10 primeros multiplos

// let numero = 5
//  for (let i=1; i<=10; i++){
//     let resultado = numero *i

//     console.log(numero + " x " + i + " = " + resultado);
    
//  }

 // 2- ingres de numeros los cualees se acumulan, el programa termina si se ingres un cero



//  let condicion = true
//  let acumulador= 0 

//  while(true){
//     let numero1 = parseInt(prompt("ingresa numero (si ingresa 0 termina el programa)"))

//     if(numero1 === 0){
//         alert("haz salido, gracias por jugar")
//         break
//     }

//      acumulador += numero1
//      console.log(acumulador)

//  }

// 3- adivinar numero secreto con intentos indeterminados 

// let secreto =67
// let contador = 0
// let condicion = true

// while(condicion){

// let adivinado = parseInt(prompt("adivina el numero, ingresa para intentar"))

//   if(adivinado === secreto){
//     alert("genial, adivinaste")
//     break
//   }else if(adivinado > secreto){
//     alert("el numero que ingresaste es mayor, sigue intentando")
//   }else{
//     alert("el numero que ingresaste es menor, sigue intentando")
//   }
// }

// 4- adivinar si un numero es primo

// function esPrimo(numero){
//      // Verificar si el número es menor o igual a 1
//      if (numero <= 1) {
//         return false;
//     }

//     // verificar si es divisible entre mas numeros 

//     for (let i=2; i<= numero/2; i++){
//         if (numero % i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(esPrimo(2));  // true
// console.log(esPrimo(4));  // false
// console.log(esPrimo(7));  // true
// console.log(esPrimo(10)); // false
// console.log(esPrimo(13)); // true
// console.log(esPrimo(50)); // false

// 5- mostrar divisores de un numero

// let numero5 = parseInt(prompt("ingresa un numero, para ver sus divisores"))
 
// for(let i =1; i<=numero5; i++){
//     if(numero5 % i === 0){
//         console.log(i);
//     }
// }

//6- recorrer un array de 10 elementos y 7 el doble

// let arreglo = [1,2,3,4,5,6,7,8,9,10]

// for(let numero of arreglo){
//     console.log(numero)
// }

// for (let i=0; i< arreglo.length; i++){
//     console.log(arreglo[i]*2)
// }

 // 8- recorrer un arreglo de  objetos e imprimir un mensaje de presentacion  

 // Array de objetos representando a cada miembro de la familia
// let familia = [
//     { nombre: "Juan", edad: 45, relacion: "Padre", ocupacion: "Ingeniero" },
//     { nombre: "Ana", edad: 42, relacion: "Madre", ocupacion: "Doctora" },
//     { nombre: "Luis", edad: 18, relacion: "Hijo", ocupacion: "Estudiante" },
//     { nombre: "María", edad: 16, relacion: "Hija", ocupacion: "Estudiante" },
//     { nombre: "Roberto", edad: 70, relacion: "Abuelo", ocupacion: "Jubilado" }
// ];

// // Usar 'for...of' para iterar sobre los elementos del array
// for (let miembro of familia) {
//     let mensaje = `Hola, me llamo ${miembro.nombre}. Tengo ${miembro.edad} años. Soy el/la ${miembro.relacion} de la familia y trabajo como ${miembro.ocupacion}.`;
//     console.log(mensaje);
// }

// 9- imprimir los numeros pares
// let arreglopar = [1,2,3,4,5,6,7,8,9,10]

// for (let componente of arreglopar){
//     if (componente % 2 !== 0){
//         console.log("es impar: " + componente)
//     } else{
//         console.log("no es impar: " + componente)
//     }
// }

// 10- sumar numeros pares por un lado e impares por otro 

// let condicion = true
// let contador = 0
// let numerospar =0
// let numerosImpar=0
// while(condicion){
//     let numero = parseInt(prompt("ingrese un numero"))
//     if(numero == 0){
//       console.log("haz finalizado el programa");
//       break
//     }else if(numero % 2 !==0){
//         numerosImpar += numero
//     }else{
//         numerospar += numero
//     }
// }

//  console.log(numerosImpar);
//  console.log(numerospar);

// 11- imprimir el numero mas grande de un arreglo   12- imprimir el numero mas chico de un arreglo 

// const array = [5, 10, 3, 8, 15, 2, 7, 12, 9, 4,1,20];
//     let maximo = array[0]; // Asumimos que el primer elemento es el máximo inicialmente
//     let minimo = array[0]
//     // Iteramos por el array para encontrar el máximo
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > maximo) {
//             maximo = array[i];
//         }else if (array[i] < maximo){
//             minimo = array[i];
//         }
//     }

// console.log("El número más grande es:", maximo);
// console.log("El número más grande es:", minimo);

// 13- piedra , papel o tijeras
// Función para determinar el ganador
// function determinarGanador(jugador1, mano1, jugador2, mano2) {
//     if (mano1 === mano2) {
//         return "empate";
//     } else if (
//         (mano1 === "piedra" && mano2 === "tijeras") ||
//         (mano1 === "tijeras" && mano2 === "papel") ||
//         (mano1 === "papel" && mano2 === "piedra")
//     ) {
//         return jugador1;
//     } else {
//         return jugador2;
//     }
// }

// // Función principal del juego
// function jugarPiedraPapelTijeras() {
//     const nombreJugador1 = prompt("Ingrese el nombre del Jugador 1:");
//     const nombreJugador2 = prompt("Ingrese el nombre del Jugador 2:");

//     while (true) {
//         const manoJugador1 = prompt(`${nombreJugador1}, elige: piedra, papel o tijeras (o escribe "salir" para terminar):`).toLowerCase();
//         if (manoJugador1 === "salir") break;

//         const manoJugador2 = prompt(`${nombreJugador2}, elige: piedra, papel o tijeras (o escribe "salir" para terminar):`).toLowerCase();
//         if (manoJugador2 === "salir") break;

//         const ganador = determinarGanador(nombreJugador1, manoJugador1, nombreJugador2, manoJugador2);

//         if (ganador === "empate") {
//             alert("¡Es un empate! Jueguen otra vez.");
//         } else {
//             alert(`¡${ganador} ha ganado con ${ganador === nombreJugador1 ? manoJugador1 : manoJugador2}!`);
//             break;
//         }
//     }
// }
// jugarPiedraPapelTijeras();


// 14- 15

// for (let i = 0; i < 5; i++) {
//     let piso = '';
//     for (let j = 0; j < i + 1; j++) {
//       piso = piso + '*';
//     }
//     console.log(piso)
//   }

//   for (let i = 5; i > 0; i--) {         
//     let piso1 = '';                   
//     for (let j = 0; j < i; j++) {     
//         piso1 = piso1+ '*';           
//     }
//     console.log(piso1);               
// }

// 16-  Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array ordenado.

// let array = [5,7,8,9,6,4,3,2,1,10]
// let arrayOrden=[]
// let menor = array[0]
// let indice =0

// for(let j=0; j<10; j++){
//    for (let i=0; i< array.length; i++){
//       // encontramos el menor
//          if(array[i] < menor ){
//             menor = array[i] 
//          } 
//       }
//     indice = array.indexOf(menor)
//     array.splice(indice,1)
//     arrayOrden.push(menor)
//    menor = array[0]
// }

// console.log(arrayOrden)
