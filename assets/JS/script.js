// let nombre = prompt("¿Cual es tu nombre?");
// let apellido = prompt("¿Cual es tu Apellido?");
// let edad = prompt("¿Cual es tu edad?");
// let deporteFav = prompt("¿Cual es tu deporte favorito?");


// document.write("Nombre: " + nombre + "<br/>");
// document.write("Apellido: " + apellido + "<br/>");
// document.write("Edad: " + edad + "<br/>");
// document.write("Deporte Favorito: " + deporteFav + "<br/>");
let nombre = prompt("¿Cual es tu nombre?");
let carrera = prompt("¿Cual es tu carrera?");

let nombreA = document.getElementById("nombre");
let carreraA = document.getElementById("carrera");

nombreA.innerHTML = nombre;
carreraA.innerHTML = carrera;

// Obtenermos las notas 1, 2, y 3 y las almacenamosen variables
var nota1HTML = +prompt("Ingrese la nota 1 de HTML");
var nota2HTML = +prompt("Ingrese la nota 2 de HTML");
var nota3HTML = +prompt("Ingrese la nota 3 de HTML");

// Obtenemos los elementos de html y los almacenamos en variables
var HTML1 = document.getElementById("HTML1");
var HTML2 = document.getElementById("HTML2");
var HTML3 = document.getElementById("HTML3");
var HTMLPromedio = document.getElementById("HTMLPromedio");

//En el contenido del HTML1 (inner) le pasamos la nota almacenada en notaHTML
HTML1.innerHTML = nota1HTML;
HTML2.innerHTML = nota2HTML;
HTML3.innerHTML = nota3HTML;
HTMLPromedio.innerHTML = ((nota1HTML+nota2HTML+nota3HTML)/3).toFixed(2);

// console.log(nota1HTML);
var nota1CSS = +prompt("Ingrese la nota 1 de CSS");
var nota2CSS = +prompt("Ingrese la nota 2 de CSS");
var nota3CSS = +prompt("Ingrese la nota 3 de CSS");

// Obtenemos los elementos de css y los almacenamos en variables
var CSS1 = document.getElementById("CSS1");
var CSS2 = document.getElementById("CSS2");
var CSS3 = document.getElementById("CSS3");
var CSSPromedio = document.getElementById("CSS3Promedio");

//En el contenido del CSS1 (inner) le pasamos la nota almacenada en notaCSS
CSS1.innerHTML = nota1CSS;
CSS2.innerHTML = nota2CSS;
CSS3.innerHTML = nota3CSS;
CSSPromedio.innerHTML = ((nota1CSS+nota2CSS+nota3CSS)/3).toFixed(2);

var nota1JAVASCRIPT = +prompt("Ingrese la nota 1 de JAVASCRIPT");
var nota2JAVASCRIPT = +prompt("Ingrese la nota 2 de JAVASCRIPT");
var nota3JAVASCRIPT = +prompt("Ingrese la nota 3 de JAVASCRIPT");

// Obtenemos los elementos de javascript y los almacenamos en variables
var JAVASCRIPT1 = document.getElementById("JAVASCRIPT1");
var JAVASCRIPT2 = document.getElementById("JAVASCRIPT2");
var JAVASCRIPT3 = document.getElementById("JAVASCRIPT3");
var JAVASCRIPTPromedio = document.getElementById("JAVASCRIPTPromedio");

//En el contenido del JAVASCRIPT1 (inner) le pasamos la nota almacenada en notaJAVASCRIPT
JAVASCRIPT1.innerHTML = nota1JAVASCRIPT;
JAVASCRIPT2.innerHTML = nota2JAVASCRIPT;
JAVASCRIPT3.innerHTML = nota3JAVASCRIPT;
JAVASCRIPTPromedio.innerHTML = ((nota1JAVASCRIPT + nota2JAVASCRIPT + nota3JAVASCRIPT)/3).toFixed(2);

