const burger = document.querySelector('.burger')
const ul = document.querySelector('.navbar nav ul')

burger.addEventListener('click', function(){
    ul.classList.toggle('line-opacity')
    ul.classList.toggle('line-opacity-2')
})

const login_page = document.getElementById('login-page')

const register_page = document.getElementById('register-page')


const login = document.querySelector('.login')
const register = document.querySelector('.register')
const indecator = document.querySelector('.indecator')

login_page.addEventListener('click', function(){
    login.style.transform = "translateX(0px)"
    register.style.transform = "translateX(300px)"
    indecator.style.transform = "translateX(50px)"

})

register_page.addEventListener('click', function(){
    login.style.transform = "translateX(-300px)"
    register.style.transform = "translateX(0px)"
    indecator.style.transform = "translateX(157px)"

})
