const customMenu = document.getElementById("custom-menu");
const body = document.querySelector("body");

body.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    customMenu.classList.add("visible");
    customMenu.style.top = e.clientY + "px";
    customMenu.style.left = e.clientX + "px";;
});

body.addEventListener("click", function (e) {
    customMenu.classList.remove("visible");
    deleteTable.classList.remove("visible")
    deleteNote.classList.remove("visible")
});

const itemTable = document.querySelector(".item-table")
const table = document.querySelector(".table")
itemTable.addEventListener("click", function () {
    table.classList.add("active")
})

const itemNote = document.querySelector(".item-note")
const note = document.querySelector(".note")

itemNote.addEventListener("click", function () {
    note.classList.add("active")
})


const deleteTable = document.querySelector("#delete-table");
table.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    // customMenu.classList.remove("visible");
    deleteTable.classList.add("visible")
    deleteTable.style.top = e.clientY + "px";
    deleteTable.style.left = e.clientX + "px";;

})

const deleteNote = document.querySelector("#delete-note");
note.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    // customMenu.classList.remove("visible");
    deleteNote.classList.add("visible")
    deleteNote.style.top = e.clientY + "px";
    deleteNote.style.left = e.clientX + "px";;
})

deleteTable.addEventListener("click", function(){
    table.classList.remove("active")
})

deleteNote.addEventListener("click", function(){
    note.classList.remove("active")
})