"use strict";
let btnStop = document.querySelector(".btnStop");
let svg = document.querySelector(".svg");
let btnWave= document.querySelector(".btnWave");

btnStop.addEventListener("click", stop);
btnWave.addEventListener("click", wave);


function stop(){
    svg.classList.toggle("stop");
}

function wave(){
    svg.classList.toggle("wave");
}