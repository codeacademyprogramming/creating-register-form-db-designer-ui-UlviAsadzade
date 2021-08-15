const form = document.querySelector(".form")

const nameInput = document.querySelector(".name")
const nameInputSpan = document.querySelector(".error-name")
nameInput.addEventListener("change", function (e) {
    let text = "";
    if (e.target.value.length <= 2 || e.target.value.length > 50) {
        text = "Tam adiniz minimum 2 herfli olmalidir!"
        document.getElementById("name").style.border = "2px solid red"
    }
    else {
        document.getElementById("name").style.border = "2px solid green"
    }
    nameInputSpan.innerHTML = text;


})

const emailInput = document.querySelector(".email")
const emailInputSpan = document.querySelector(".error-email")
emailInput.addEventListener("change", function (e) {
    let text = "";
    if (!e.target.value.includes("@")) {
        text = "Email yazarken @ isaresi olmalidir!"
        document.getElementById("email").style.border = "2px solid red"
    }
    else {
        document.getElementById("email").style.border = "2px solid green"
    }
    emailInputSpan.innerHTML = text;

})

const usernameInput = document.querySelector(".username")
const usernameInputSpan = document.querySelector(".error-username")
usernameInput.addEventListener("change", function (e) {
    let text = "";
    if (e.target.value.length <= 2 || e.target.value.length > 5) {
        text = "Istifadeci adiniz minimum 2 herfli olmalidir!"
        document.getElementById("username").style.border = "2px solid red"
    }
    else {
        document.getElementById("username").style.border = "2px solid green"
    }
    usernameInputSpan.innerHTML = text;

})

const passwordInput = document.querySelector(".password")
const passwordInputSpan = document.querySelector(".error-password")

const repeatPasswordInput = document.querySelector(".repeat-password")
const repeatpasswordInputSpan = document.querySelector(".error-repeat-password")
repeatPasswordInput.addEventListener("change", function (e) {
    let text = "";
    if (e.target.value != passwordInput.value) {
        text = "Sifreniz onceki ile eyni deyil!"
        document.getElementById("repeat-password").style.border = "2px solid red"
        document.getElementById("password").style.border = "2px solid red"
    }
    else {
        document.getElementById("repeat-password").style.border = "2px solid green"
        document.getElementById("password").style.border = "2px solid green"
    }
    repeatpasswordInputSpan.innerHTML = text;

})



