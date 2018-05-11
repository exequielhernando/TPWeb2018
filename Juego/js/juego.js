"use strict";

let botonComenzar = document.getElementById('comenzar');
  botonComenzar.addEventListener("click", function(){
    generarCartas();
});

const tapada = "cuadrado-negro";
const sinMarca = "cartaSinMarca";
const conMarca = "cartaConMarca";
let marcadas;
const arrLength = 8;


function azarcartas() {
  return Math.floor(Math.random() * (2)+ 1);
}


function generarCartas(){

  marcadas = 0;
  let arrCartas = [];
  let azarCarta;
  for (let i = 0; i < 8; i++) {
    azarCarta = azarcartas();
    if(azarCarta == 2){
      marcadas++;
    }
    arrCartas[i] = azarCarta;
  }
  mostrarCartas(arrCartas);
}

function mostrarCartas(arrCartas) {
    let cartaActual;
    let arrLength = arrCartas.length;
    for (let i = 0; i < arrLength; i++) {
        cartaActual= document.getElementById(i);
        if(arrCartas[i] == 1){
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
