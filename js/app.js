const register = document.querySelector("#register")

const login = document.querySelector("#login")

const start = document.querySelector("#hero-start")

const modalRegister = document.querySelector("#modal-register")
const modalLogin = document.querySelector("#modal-login")

const modalCloseLogin = document.querySelector("#modal-close-login")
const modalCloseRegister = document.querySelector("#modal-close-register")

const formRegister = document.querySelector("#form_register")





start.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.add("active")
})

register.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.add("active")
})

login.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.add("active")
})

/* cERRAR MODAL CON LA "X"*/

modalCloseLogin.addEventListener("click", function(e) {
    e.preventDefault()
    modalLogin.classList.remove("active")
})

modalCloseRegister.addEventListener("click", function(e) {
    e.preventDefault()
    modalRegister.classList.remove("active")
})

/* ENVIAR FORM */

formRegister.addEventListener("submit", function(e) {
           e.preventDefault()
           const userName = document.querySelector("#nombre-register").value
           const userLastname = document.querySelector("#apellido-register").value
           const userBday = document.querySelector("#fecha-nacimiento-register").value
           const userEmail = document.querySelector("#email-register").value
           const userPassword = document.querySelector("#password-register").value
           
          const profileData = { name: userName, lastName: userLastname, birthDate: userBday, email : userEmail , password : userPassword}
        
           const profileInfo = JSON.stringify(profileData)
           localStorage.setItem("perfil", perfilInfo)
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