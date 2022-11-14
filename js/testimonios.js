

const slider = document.querySelector("#slider-caja");

let sliderDiv = document.querySelectorAll(".opinion__caja__seccion");

const opinionCaja = document.querySelector(".opinion__caja");
opinionCaja.style.width = `${sliderDiv.length}00%`; // Segun la cantidad de secciones que haya se incrementa el porcentaje

let sliderDivUltimo = sliderDiv[sliderDiv.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderDivUltimo)

function moverDerecha() {
    let primerSlide = document.querySelectorAll(".opinion__caja__seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', primerSlide);
        slider.style.marginLeft = "-100%";
    },500)
}

btnRight.addEventListener('click', () => {
    moverDerecha();
})

function moverIzquierda() {
    let sliderDiv = document.querySelectorAll(".opinion__caja__seccion");
    let sliderDivUltimo = sliderDiv[sliderDiv.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderDivUltimo);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnLeft.addEventListener('click', () => {
    moverIzquierda();
})

setInterval(() => {
    moverDerecha();
},5000)