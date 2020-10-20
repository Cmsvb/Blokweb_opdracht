// JavaScript Document

// Dropdown nav mobiel
var dropdownbutton = document.querySelector(".dropdown");
var dropdownmenu = document.querySelector("header > ul")

function dropdownactivate(){
    dropdownmenu.classList.toggle("dropdownnav");
}

dropdownbutton.addEventListener('click', dropdownactivate)

// Accordion productpagina
var accordionButton = document.querySelector("#accordionbutton")
var accordionInfo = document.querySelector("#accordioninfo")

function accordionActivate(){
    accordionInfo.classList.toggle("showinfo");
}

accordionButton.addEventListener('click', accordionActivate);

// Add to card button productpagina
var addToCartButton = document.querySelector(".addtocard");

function updateShoppingBag() {
    console.log('plus 1');
    let shoppingBagAmount = document.querySelector(".shopping-bag span");
    let currentAmount = shoppingBagAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let newAmount = currentAmount + 1;
    shoppingBagAmount.innerHTML = newAmount;
    if (newAmount == 1) {
        shoppingBagAmount.classList.add("visible");
    }
}

addToCartButton.addEventListener('click', updateShoppingBag);