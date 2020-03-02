import './estilos.scss';
import $ from "jquery";
import './banner1.png';
import './banner2.png';
import './computadora.jpg';
import './presentacion.jpg';
import './servicio.jpg'
import './presentacionbanner.jpg';
import './map-point.png';
import './bytexbyte.ico';

let linkquienes = document.getElementById("linkquienes");
let linkmision = document.getElementById("linkmision");
let linkvision = document.getElementById("linkvision");
let linkobjr = document.getElementById("linkobjr");
let linkubi = document.getElementById("linkubi");
let botonescondido = document.getElementById("botonescondido");
let collapsibleNavId = document.getElementById("collapsibleNavId");
let t_servicios = document.getElementById("t_servicios");
let fecha = document.getElementById("fecha");

window.onload = () => {
    let pantallaCarga = document.getElementById("pantallaCarga");
    pantallaCarga.setAttribute("hidden", "hidden");
}

let fecha_actual = new Date();
let anio = fecha_actual.getFullYear();
fecha.innerText=anio;

$("#linkquienes").click(function () {
    $('html,body').animate({
        scrollTop: $("#quienessomos").offset().top
    }, 1000);
});

$("#linkmision").click(function () {
    $('html,body').animate({
        scrollTop: $("#mision").offset().top
    }, 1000);
});

$("#linkvision").click(function () {
    $('html,body').animate({
        scrollTop: $("#vision").offset().top
    }, 1000);
});

$("#linkobjr").click(function () {
    $('html,body').animate({
        scrollTop: $("#obrealizado").offset().top
    }, 1000);
});
$("#linkubi").click(function () {
    $('html,body').animate({
        scrollTop: $("#ubicanos").offset().top
    }, 1000);
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        t_servicios.removeAttribute('class');
        t_servicios.setAttribute('class','card-title');
        console.log('menor o igual a 700');
        
    } else {
        t_servicios.removeAttribute('class');
        t_servicios.setAttribute('class','card-title display-3');
        console.log('mayor a 700');
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


let esconderboton = () => {
    botonescondido.setAttribute("class", "navbar-toggler d-lg-none collapsed");
    botonescondido.setAttribute("aria-expanded", "false");
    collapsibleNavId.setAttribute("class", "collapse navbar-collapse");
}
let redireccion = () => {
    location = "https://www.google.com/intl/es/photos/about/"
}
linkquienes.onclick = () => {
    esconderboton();
}
linkmision.onclick = () => {
    esconderboton();
}
linkvision.onclick = () => {
    esconderboton();
}
linkobjr.onclick = () => {
    esconderboton();
}
linkubi.onclick = () => {
    esconderboton();
}
$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});