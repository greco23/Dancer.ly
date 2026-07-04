const register = document.querySelector("#register")

const login = document.querySelector("#login")

const modalRegister = document.querySelector("#modal-register")

const modalLogin = document.querySelector("#modal-login")

const modalClose = document.querySelector("#modal-close")

const formRegister = document.querySelector("#modal-register form")


register.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.add("active")
})

login.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.add("active")
})

modalClose.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.remove("active")
})

/* ENVIAR FORM */

formRegister.addEventListener("submit", function(e) {
    e.preventDefault()
    window.location.href = "pages/proyectos.html"
})

/* CERRAR MODAL CON EL FONDO */

modalRegister.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        modalRegister.classList.remove("active")
    }
})

modalLogin.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        modalLogin.classList.remove("active")
    }
})

/* YA REGISTRADO */

const logged = document.querySelector("#alreadyLogged")

logged.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.remove("active")
    modalLogin.classList.add("active")
})

const unregistered = document.querySelector("#notRegister")

unregistered.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.remove("active")
    modalRegister.classList.add("active")
})