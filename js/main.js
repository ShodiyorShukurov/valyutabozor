// DOM - Document Object Model

// let elParagraphs = document.getElementsByTagName("p");
// HTMLda bor bo'lgan elementlarni JavaScriptda tagni nomi orqali topib olish

// let elParagraphs = document.getElementsByClassName("text");
// HTMLda bor bo'lgan elementlarni JavaScriptda class nomi orqali topib olish

// let elParagraph = document.getElementById("text");
// HTMLda bor bo'lgan elementni JavaScriptda id si orqali topib olish

// let elParagraphs = document.querySelectorAll(".text");
// HTMLda bor bo'lgan elementlarni JavaScriptda (class, id, tag) nomi orqali topib olish

// let elParagraph = document.querySelector(".text");
// let elParagraphId = document.querySelector("#text");
// let elNimadir = document.querySelector(".nimadir");


// elParagraph.innerHTML = "<div class='alert bg-primary'>Hello world!</div>";
// elParagraphId.innerText = "<div class='alert bg-primary'>Hello world!</div>";
// elNimadir.textContent = "<div class='alert bg-primary'>Hello world!</div>";

// elParagraph.style.backgroundColor = "#fff000";
// elParagraph.style.color = "#00f";
// elParagraph.style.borderRadius = "20px";
// console.log(elParagraph);

// CURRENCY START
let elCurrencyInput = document.querySelector(".currency__input");
let elCurrencySelect = document.querySelector(".currency__select");
let elCurrencyBtn = document.querySelector(".currency__btn");
let elCurrencyResult = document.querySelector(".currency-result");

// console.log(elCurrencyInput);

// Decloration function
// function currencyCalc(evt){
//     evt.preventDefault();
//     console.log(elCurrencyInput);
// }

const USD = 11300;
const EURO = 12150;
const YUAN = 1670;
const RUBL = 164;
const DINOR = 36969;
const FUNT = 13714;
const JOHN_WICK_GOLD = 173035197;

elCurrencyBtn.addEventListener("click",function(evt){
    evt.preventDefault();
    let result = "";
    if(elCurrencyInput.value !== "" && elCurrencySelect.value !== "choose"){
        if(elCurrencySelect.value === "USD"){
            result += elCurrencyInput.value * USD;
        } else if(elCurrencySelect.value === "EURO"){
            result += elCurrencyInput.value * EURO;
        } else if(elCurrencySelect.value === "YUAN"){
            result += elCurrencyInput.value * YUAN;
        } else if(elCurrencySelect.value === "RUBL"){
            result += elCurrencyInput.value * RUBL;
        } else if(elCurrencySelect.value === "DINOR"){
            result += elCurrencyInput.value * DINOR;
        } else if(elCurrencySelect.value === "FUNT"){
            result += elCurrencyInput.value * FUNT;
        } else if(elCurrencySelect.value === "JOHN-WICK") {
            result += elCurrencyInput.value * JOHN_WICK_GOLD;
        }
    
        // elCurrencyResult.textContent = "Natija: " + result + " so'm";
        elCurrencyResult.innerHTML = "<div class='alert bg-primary mb-0'>Natija: <b>"+ result +"</b> so'm!</div>";
    } else {
        elCurrencyResult.innerHTML = "<div class='alert bg-primary mb-0'><b>To'g'ri ma'lumot kiriting</b>!</div>";
    }
})
// CURRENCY END

// BULB START
let elBulbImg = document.querySelector(".bulb-img");

// Decloration function
// function switchOn(){
//     elBulbImg.src = "../images/pic_bulbon.gif";
// }

// Expression function
// let switchOn = function(){
//         elBulbImg.src = "../images/pic_bulbon.gif";
// }

// Arrow function
const switchOn = () => {
    elBulbImg.src = "../images/pic_bulbon.gif";
}

const switchOff = () => {
    elBulbImg.src = "../images/pic_bulboff.gif";
}

// BULB END