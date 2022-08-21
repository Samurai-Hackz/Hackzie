const hamb = document.querySelector('#hamb')
const hambField = document.querySelector('#hambField')
const popup = document.querySelector("#popup")
const menu  = document.querySelector("#menu").cloneNode(1)
const body = document.querySelector("body")
const links = document.querySelectorAll('.navbar-a')

hamb.addEventListener('click', clicked)
// links.addEventListener('click', remove)

// function remove(e) {
//     e.preventDefault()
//     hambField.classList.remove('active')
//     popup.classList.remove('open')
//     body.classList.remove('noscroll')
// }

function clicked(e) {
    e.preventDefault()
    hambField.classList.toggle('active')
    popup.classList.toggle('open')
    body.classList.toggle('noscroll')
    renderPopup()
}

function renderPopup(){
    popup.appendChild(menu)
}

