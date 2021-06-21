let span = document.getElementById("span")
let header = document.getElementById("header__option")

span.addEventListener("click", toogleClass)

function toogleClass(){
    if (header.classList.contains("hide")){
        header.classList.remove("hide")
        span.classList.add("bg-close")
        span.classList.remove("header__icon--span")

    } else {
        header.classList.add("hide")
        span.classList.remove("bg-close")
        span.classList.add("header__icon--span")
    }
}