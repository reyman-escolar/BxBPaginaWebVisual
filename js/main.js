window.onload = () => {
    // console.log("ya cargó todo");
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

let linkquienes = document.getElementById("linkquienes");
let linkmision = document.getElementById("linkmision");
let linkvision = document.getElementById("linkvision");
let linkobjr = document.getElementById("linkobjr");
let botonescondido = document.getElementById("botonescondido");
let collapsibleNavId = document.getElementById("collapsibleNavId");
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let imagen4 = document.getElementById("imagen4");
let imagen5 = document.getElementById("imagen5");
let imagen6 = document.getElementById("imagen6");


let esconderboton = () => {
    botonescondido.setAttribute("class", "navbar-toggler d-lg-none collapsed");
    botonescondido.setAttribute("aria-expanded", "false");
    collapsibleNavId.setAttribute("class", "collapse navbar-collapse");
}
let redireccion =()=>{
    location="https://www.google.com/intl/es/photos/about/"
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

$(document).ready(function () {
    $('.zoom').hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});

imagen1.onclick=()=>{
    redireccion();
}
imagen2.onclick=()=>{
    redireccion();
}
imagen3.onclick=()=>{
    redireccion();
}
imagen4.onclick=()=>{
    redireccion();
}
imagen5.onclick=()=>{
    redireccion();
}
imagen6.onclick=()=>{
    redireccion();
}