/*var h1Crown = document.querySelector('h1');
h1Crown.textContent = 'There your Crown!';*/

function showYeah() {
   document.getElementById('txtYeah').innerHTML = 'Yeah Yeah Yeah! I saw you want to have a Party Time!';
}


const buttons = Array.from(document.querySelectorAll('.button'))
const count = buttons.length
const increase = Math.PI * 2 / buttons.length
const radius = 150

buttons.forEach((button, i) => {
    button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + 'px'
    button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + 'px'
    button.addEventListener('click', move)
})

function move(e) {
    const n = buttons.indexOf(e.target)
    buttons.forEach((button, i) => {
        button.style.top = Math.sin(-Math.PI / 2 + (i - n % count) * increase) * radius + 'px'
        button.style.left = Math.cos(-Math.PI / 2 + (i - n % count) * increase) * radius + 'px'
    })
}