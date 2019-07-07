const inputs = document.querySelectorAll("input")
const loginBox = document.querySelector('.Login-box')
const signBox = document.querySelector('.SignUp-box')
const loginBtn = document.querySelector(".login")
const signBtn = document.querySelector(".signUp")


inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        e.target.value = ""
        e.target.parentElement.classList.add("focused")
    })
})


loginBox.classList.add("visible")

loginBtn.addEventListener("click", (e) => {
    loginBox.classList.add("visible")
    signBox.classList.remove("visible")
    signBox.classList.add("hide")
    loginBtn.classList.add("active")
    signBtn.classList.remove("active")
})

signBtn.addEventListener("click", (e) => {
    loginBox.classList.remove("visible")
    signBox.classList.add("visible")
    signBtn.classList.add("active")
    loginBtn.classList.remove("active")
})
