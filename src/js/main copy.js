import './estilos.scss';
import $ from "jquery";
import './banner1.png';
import './banner2.png';
import './computadora.jpg';
import './presentacion.jpg';
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
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let imagen4 = document.getElementById("imagen4");
let imagen5 = document.getElementById("imagen5");
let imagen6 = document.getElementById("imagen6");

window.onload = () => {
    let pantallaCarga = document.getElementById("pantallaCarga");
    pantallaCarga.setAttribute("hidden", "hidden");
}

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