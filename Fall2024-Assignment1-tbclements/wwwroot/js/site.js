// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function loadLandingPage(){
    let firstElems = document.getElementsByClassName("firstPageItem")

    let secondElems = document.getElementsByClassName("secondPageItem")
    let thirdElems = document.getElementsByClassName("thirdPageItem")

    for(let i = 0; i < firstElems.length; i++){
        firstElems[i].setAttribute("style", "display: inline");
    }
    for(let i = 0; i < secondElems.length; i++){
        secondElems[i].setAttribute("style", "display: none");
    }
    for(let i = 0; i < thirdElems.length; i++){
        thirdElems[i].setAttribute("style", "display: none");
    }
}

function loadTrailer(){
    let firstElems = document.getElementsByClassName("firstPageItem")

    let secondElems = document.getElementsByClassName("secondPageItem")
    let thirdElems = document.getElementsByClassName("thirdPageItem")

    for(let i = 0; i < firstElems.length; i++){
        firstElems[i].setAttribute("style", "display: none");
    }
    for(let i = 0; i < secondElems.length; i++){
        secondElems[i].setAttribute("style", "display: inline");
    }
    for(let i = 0; i < thirdElems.length; i++){
        thirdElems[i].setAttribute("style", "display: none");
    }
}

function loadSummary(){
    let firstElems = document.getElementsByClassName("firstPageItem")

    let secondElems = document.getElementsByClassName("secondPageItem")
    let thirdElems = document.getElementsByClassName("thirdPageItem")

    for(let i = 0; i < firstElems.length; i++){
        firstElems[i].setAttribute("style", "display: none");
    }
    for(let i = 0; i < secondElems.length; i++){
        secondElems[i].setAttribute("style", "display: none");
    }
    for(let i = 0; i < thirdElems.length; i++){
        thirdElems[i].setAttribute("style", "display: inline");
    }
}

loadSummary();