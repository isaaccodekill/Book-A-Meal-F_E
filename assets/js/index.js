const inputs = document.querySelectorAll("input")
const loginBox = document.querySelector('.Login-box')
const signBox = document.querySelector('.SignUp-box')
const loginBtn = document.querySelector(".login")
const signBtn = document.querySelector(".signUp")


inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        e.target.value = ""
        e.target.parentElement.classList.remove("nonFocused")
        e.target.parentElement.classList.add("focused")
    })
    input.addEventListener("blur", (e) => {
        if(e.target.value === ""){
            e.target.parentElement.classList.remove("focused")
            e.target.parentElement.classList.add("nonFocused")
        }
    })
})



loginBtn.addEventListener("click", (e) => {
    loginBox.style.display = "block"
    signBox.style.display = "none"
    loginBtn.classList.add("active")
    signBtn.classList.remove("active")
})

signBtn.addEventListener("click", (e) => {
    loginBox.style.display = "none"
    signBox.style.display = "block"
    signBtn.classList.add("active")
    loginBtn.classList.remove("active")
})
