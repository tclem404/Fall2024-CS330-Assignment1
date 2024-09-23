// Ignore this, was for nav buttons but changed bc didnt want to center
// everything vertically so put all on one page :)
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

source = 5
switch(source){
    case 1:
        loadLandingPage();
        break;
    case 2:
        loadTrailer();
        break;
    case 3:
        loadSummary();
        break;
}
