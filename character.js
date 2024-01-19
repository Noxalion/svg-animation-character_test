"use strict";
let btnStop = document.querySelector(".btnStop");
let svg = document.querySelector(".svg");
let btnWave= document.querySelector(".btnWave");
let btnWarming= document.querySelector(".btnWarming");

btnStop.addEventListener("click", stop);
btnWave.addEventListener("click", wave);
btnWarming.addEventListener("click", warming);

function stop(){
    svg.classList.remove("wave");
    svg.classList.remove("warming");
}

function wave(){
    stop();
    svg.classList.add("wave");
}

function warming(){
    stop();
    svg.classList.add("warming");
}

let root = document.querySelector(':root');
let colorPickers;
const defaultColor = ["#C28640", "#500463", "#3F7FCB", "#000000"]


colorPickers = document.querySelectorAll(".color-picker");
for (let i = 0; i < colorPickers.length; i++){
    colorPickers[i].value = defaultColor[i];
    if (i == 0) {
        colorPickers[i].addEventListener("change", updateSkin, false);
    }else if(i == 1){
        colorPickers[i].addEventListener("change", updateShirt, false);
    }else if(i == 2){
        colorPickers[i].addEventListener("change", updateTrousers, false);
    }else if(i == 3){
        colorPickers[i].addEventListener("change", updateShoes, false);
    }
    colorPickers[i].select();
}

function updateSkin(event) {
    root.style.setProperty(`--skin-color`, event.target.value);
}

function updateShirt(event) {
    root.style.setProperty(`--shirt-color`, event.target.value);
}

function updateTrousers(event) {
    root.style.setProperty(`--trousers-color`, event.target.value);
}

function updateShoes(event) {
    root.style.setProperty(`--shoes-color`, event.target.value);
}  