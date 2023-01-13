"use strict"

const padre=document.getElementById("Nod");
const padre2=document.getElementById("Guaridas");
const padre3=document.getElementById("Detectives");
const divisito=document.querySelector(".subida");
const divisito2=document.querySelector(".subida2");
const divisito3=document.querySelector(".subida3");
const esconder=document.querySelector(".escondido");
const esconder2=document.querySelector(".escondido2");
const esconder3=document.querySelector(".escondido3");

padre.addEventListener("mouseenter",()=>{
    divisito.setAttribute("data-aos","fade-up");
    divisito.setAttribute("data-aos-duration","2000");
    divisito.style.opacity=1;
    esconder.style.display="none";
});

padre.addEventListener("mouseleave",()=>{
    divisito.removeAttribute("data-aos");
    divisito.removeAttribute("data-aos-duration","500");
    divisito.setAttribute("data-aos","fade-down");
    divisito.style.opacity=0;
    esconder.style.display="block";
});

padre2.addEventListener("mouseenter",()=>{
    divisito2.setAttribute("data-aos","fade-up");
    divisito2.setAttribute("data-aos-duration","2000");
    divisito2.style.opacity=1;
    esconder2.style.display="none";
});

padre2.addEventListener("mouseleave",()=>{
    divisito2.removeAttribute("data-aos");
    divisito2.removeAttribute("data-aos-duration","500");
    divisito2.setAttribute("data-aos","fade-down");
    divisito2.style.opacity=0;
    esconder2.style.display="block";
});

padre3.addEventListener("mouseenter",()=>{
    divisito3.setAttribute("data-aos","fade-up");
    divisito3.setAttribute("data-aos-duration","2000");
    divisito3.style.opacity=1;
    esconder3.style.display="none";
});

padre3.addEventListener("mouseleave",()=>{
    divisito3.removeAttribute("data-aos");
    divisito3.removeAttribute("data-aos-duration","500");
    divisito3.setAttribute("data-aos","fade-down");
    divisito3.style.opacity=0;
    esconder3.style.display="block";
});