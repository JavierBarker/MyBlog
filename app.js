const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})


const botonCalculo = document.querySelector('#botonCalculo');
const menuCalculo = document.querySelector('#menuCalculo');

botonCalculo.addEventListener('click', () => {
    menuCalculo.classList.toggle('hidden');
})

const botonDibujo = document.querySelector('#botonDibujo');
const menuDibujo = document.querySelector('#menuDibujo');

botonDibujo.addEventListener('click', () => {
    menuDibujo.classList.toggle('hidden');
})

const botonTecnologia = document.querySelector('#botonTecnologia');
const menuTecnologia = document.querySelector('#menuTecnologia');

botonTecnologia.addEventListener('click', () => {
    menuTecnologia.classList.toggle('hidden');
})

const botonPracticaSupervisada = document.querySelector('#botonPracticaSupervisada');
const menuPracticaSupervisada = document.querySelector('#menuPracticaSupervisada');

botonPracticaSupervisada.addEventListener('click', () => {
    menuPracticaSupervisada.classList.toggle('hidden');
})

const botonTaller = document.querySelector('#botonTaller');
const menuTaller = document.querySelector('#menuTaller');

botonTaller.addEventListener('click', () => {
    menuTaller.classList.toggle('hidden');
})