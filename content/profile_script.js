let tg = window.Telegram.WebApp;

const user_name = document.querySelector('.user_name');

let first_name = tg.initDataUnsafe?.user?.first_name || "void"
let last_name = tg.initDataUnsafe?.user?.last_name || "walker"

let p = document.createElement('p')

p.innerText = `${first_name} ${last_name}`

user_name.appendChild(p)