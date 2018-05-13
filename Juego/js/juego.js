"use strict";

let botonComenzar = document.getElementById('comenzar');
  botonComenzar.addEventListener("click", function(){
    generarCartas();
});

const tapada = "cuadrado-negro";
const sinMarca = "cartaSinMarca";
const conMarca = "cartaConMarca";
const arrLength = 8;
const fondoAcierto = "fondoAcierto";
const fondoGanaste = "ganaste";
const fondoOculto = "oculto";
let marcadas;
let arrCartas = [];
let cantaciertostotales = 0;
let canterrorestotales = 0;
let cantaciertospartida;
let canterrorespartida;
let cantidadpartidas=0;

function azarcartas() {
  return Math.floor(Math.random() * (2)+ 1);
}

function generarCartas(){
  canterrorespartida = 0;
  cantaciertospartida = 0;
  cantidadpartidas++;
  marcadas = 0;
  mostrarTablero();
  mostrarCartas();
  mostrarErrores();
  mostrarAciertos();
  mostrarPartidas();
  let azarCarta;
  for (let i = 0; i < 8; i++) {
    azarCarta = azarcartas();
    if(azarCarta === 2){
      marcadas++;
    }
    arrCartas[i] = azarCarta;
  }
  mostrarCartas();
}

function mostrarCartas() {
    let cartaActual;
    let arrLength = arrCartas.length;
    for (let i = 0; i < arrLength; i++) {
        cartaActual= document.getElementById(i);
        if(arrCartas[i] === 1){
          cartaActual.className = "carta " + sinMarca;
        }
        else{
          cartaActual.className = "carta " + conMarca;
        }
    }

    setTimeout(ocultarCartas, 2000);
}

function ocultarCartas(){
  for (let i = 0; i < arrLength; i++) {
      document.getElementById(i).className = "carta " + tapada;
  }
}

let botonelegirjugada = document.getElementById('elegirjugada');
  elegirjugada.addEventListener('click', Verificar);

function Verificar(cartaActual){
  let cartaelegida = parseInt(document.querySelector('input[name="seleccion"]:checked').value);
  if(marcadas===0){
    mostrarMensajeGanaste();
  }
  else {
    if (arrCartas[cartaelegida] === 1){
      canterrorespartida++;
      canterrorestotales++;
      mostrarErrores();
      cartaActual= document.getElementById(cartaelegida);
      cartaActual.className = "carta " + sinMarca;
      setTimeout(function functionName() {
        ocultarCartaerrada(cartaActual, cartaelegida)
      }, 2000);
    }
    else {
        marcadas--;
        cantaciertospartida++;
        cantaciertostotales++;
        cartaActual= document.getElementById(cartaelegida);
        cartaActual.className = "carta " + conMarca;
        mostrarAciertos();
        mostrarAciertosTotales();
        if(marcadas===0){
          mostrarMensajeGanaste();
        }
    }
  }

}
function ocultarCartaerrada(cartaActual,cartaelegida){
  cartaActual= document.getElementById(cartaelegida);
  cartaActual.className = "carta " + tapada;
}
function mostrarErrores(){
  let errores = document.getElementById("resultadoerrores");
   errores.innerHTML = "<th>" + canterrorespartida + "</th>";
}
function mostrarAciertos(){
  let aciertos = document.getElementById("resultadoaciertos");
   aciertos.innerHTML = "<th>" + cantaciertospartida + "</th>";
}
function mostrarAciertosTotales(){
  let aciertostotales = document.getElementById("resultadoaciertostotales");
  aciertostotales.innerHTML = "<th>" + cantaciertostotales + "</th>";
}
function mostrarPartidas(){
  let partidas= document.getElementById("numeropartidas");
  partidas.innerHTML = "<th>" + cantidadpartidas + "</th>";
}
function mostrarMensajeGanaste(){
  let mensaje = document.getElementById("tablero");
  mensaje.className = "tablero " + fondoOculto;
  let mensaje2 = document.getElementById("ganaste");
  mensaje2.className =  fondoGanaste;
}
function mostrarTablero() {
  let mensaje = document.getElementById("tablero");
  mensaje.className = "tablero " ;
  let mensaje2 = document.getElementById("ganaste");
  mensaje2.className =  "";
}
function cambiarfondo(){
  let fondoimagen = getElementById("");
  fondoimagen.className = "hola fondoAcierto";
}
