/* Ejercicio 1.2 */

let a = 5
let b = 10
let c = a + b
console.log(`A es igual a: ${a}`);
console.log(`B es igual a: ${b}`);
console.log(`La suma de a y b es: ${c}`);

/* Ejercicio 1.3 */

let nombre = prompt(`¿Cuál es tu nombre?`)
console.log(`Hola, ${nombre}`)

/* Ejercicio 2.1 */
/* 
Anoto una resolución posible pero no usa una metodología de los videos, lo guardo porque me parece la más eficiente
let mayor = Math.max(num1, num2, num3);
console.log(`El mayor de los tres números es: ${mayor}`);
*/

const num1 = 10
const num2 = 12
const num3= 14

if(num1>num2 && num1 > num3){
    console.log(`El mayor de los tres números es: ${num1}`)
}else if(num2>num3){
    console.log(`El mayor de los tres números es: ${num2}`)
}else {
    console.log(`El mayor de los tres números es: ${num3}`)
}

/* Ejercicio 2.2 */

let numeroingresado = prompt(`Ingrese un número para determinar si este es par o impar`)
if(numeroingresado >= 0){
    if(numeroingresado%2 === 0 ){
        console.log(`El número ${numeroingresado}, es par`)
    }else{
        console.log(`El número ${numeroingresado}, es impar`)
    }
} else{
    console.log(`El número ingresado (${numeroingresado}), es menor que cero o directamente no es un número.`)
}

/* Ejercicio 3.1 */

let diez = 10
while (diez >= 1){
    console.log(diez);
    diez--;
}

/* Ejercicio 3.2 */

let mayorCien
do {
   mayorCien = prompt(`Ingresa un número mayor a 100`) 
} while (isNaN(mayorCien) || mayorCien <= 100);
console.log(`Ingresaste un número mayor a 100: ${mayorCien}`)

/* Ejercicio 4.1 */

const n1=13
/*n1=12*/

esPar(n1)
function esPar(numero){
    
    if(numero%2 === 0){
        console.log(`El número ${numero} es par: True`)
    }else{
        console.log(`El número ${numero} es par: False`)
    }
   console.log(`El numero ${numero} es par: ${numero % 2 === 0 ? `True` : `False`}`)
} 

/* Ejercicio 4.2 */

const celsius = 30
const convertirCelsiusAFahrenheit = (celsius) => console.log(`${celsius}°C son equivalentes a ${celsius*1.8 + 32}°F`);
convertirCelsiusAFahrenheit(celsius);
/* No retorno el valor dado a que no guardo su valor y realizo la impresión directamente. 
Si quisiera guardarlo genero un retorno para una variable llamada Fahrenheit y la imprimiría por pantalla en un lugar distinto al de la flecha */

/* Ejercicio 5.1 */

let persona = {
    nombre: "Mateo",
    edad: 21,
    ciudad: "Godoy Cruz",
    setCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad;
    }
}
console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`)/* Muestro el antes */

let nuevaCiudad = prompt(`Ingrese su nueva ciudad`);
persona.setCiudad(nuevaCiudad);

console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`)/* Muestro el después */

/* Ejercicio 5.2 */

let libro = {
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    salida: "1967",
    antiguedad: function(anioconsulta){
        console.log(`El libro "${this.nombre}" es antiguo: ${anioconsulta - this.salida > 10 ? `True` : `False` }`)
    }
}
libro.antiguedad(2024);

/* Ejercicio 6.1 */

let numeros = [1,2,3,4,5,6,7,8,9,10]
let numeros2 = []

for(let i = 0; i < numeros.length; i++){
    numeros2[i] = numeros[i]*2;
}

console.log(`Números originales: ${numeros}`)
console.log(`Números multiplicados por 2: ${numeros2}`)

/* Ejercicio 6.2 */

let pares = []
let count = 0
let totales = 1

while(count < 10 && totales < 21){
    let ingreso = prompt(`Número a ingresar: ${totales}, pares totales: ${count}.`)
    if(ingreso % 2 === 0){
        pares.push(ingreso)
        count++
        totales++
    }else{
        totales++
    }
}

console.log(`Primeros 10 números pares: ${pares}`)

/* Ejercicio 7.1 */

const azul = document.getElementsByClassName("azul");
const button = document.getElementById("button");

const cambioAzul = () => {
    for(let i = 0; i < azul.length; i++){
        azul[i].classList.add(`textoAzul`);
    }
}

button.addEventListener("click", () => {
    cambioAzul()
});

/* Ejercicio 7.2 */

const texto = document.getElementById("texto");
const alerta = document.getElementById("alerta");

alerta.addEventListener("click", () => {
    const textoRecibido = texto.value;
    alert(`Has ingresado: ${textoRecibido}`);
});

/* Ejercicio 8.1 */

const listados = document.querySelectorAll("#listados li");

listados.forEach(listado => {
    listado.addEventListener("click", () => {
        console.log(`${listado.textContent}`)
    });
});


/* Ejercicio 8.2 */

const ingreso = document.getElementById("habDeshab")
const habilitar = document.getElementById("habilitar")
const deshabilitar = document.getElementById("deshabilitar")

deshabilitar.addEventListener("click", () => {
    ingreso.disabled = true;
});

// Evento para habilitar el input
habilitar.addEventListener("click", () => {
    ingreso.disabled = false;
});

/*Ejercicio 9.1 */

const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const mostrarCorreoDiv = document.getElementById('mostrarCorreo');
const eliminarCorreoBtn = document.getElementById('eliminarCorreo');

function mostrarCorreo() {
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreoDiv.innerHTML = `<p>Correo guardado: <strong>${correoGuardado}</strong></p>`;
    } else {
        mostrarCorreoDiv.innerHTML = '<p>No hay correo guardado.</p>';
    }
}

window.addEventListener('load', mostrarCorreo);

// Evento para guardar el correo en localStorage al enviar el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault();  
    const correo = emailInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreo(); 
    emailInput.value = ''; 
});

// Evento para eliminar el correo de localStorage
eliminarCorreoBtn.addEventListener('click', () => {
    localStorage.removeItem('correo');
    mostrarCorreo();  
});