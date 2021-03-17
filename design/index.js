const loginBtn = document.getElementById('login-btn')
const logOutBtn = document.getElementById('logout-btn')
const userInfoBlock = document.getElementById('user-info-block')

loginBtn.addEventListener('click', () => {
    loginBtn.style.display = 'none'
    userInfoBlock.style.display = 'flex'
})

logOutBtn.addEventListener('click', () => {
    loginBtn.style.display = 'flex'
    userInfoBlock.style.display = 'none'
})
