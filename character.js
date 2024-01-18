"use strict";
let btn = document.querySelector(".btnStop");
let svg = document.querySelector(".svg");

btn.addEventListener("click", stop);

function stop(){
    svg.classList.toggle("stop");
}