// JavaScript Document
var dropdownbutton = document.querySelector(".dropdown");
var dropdownmenu = document.querySelector("header > ul")

function dropdownactivate(){
    dropdownmenu.classList.toggle("dropdownnav");
    console.log("hello");
}

dropdownbutton.addEventListener('click', dropdownactivate)