let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let Body = document.querySelector('body')

function decrease () {
    header.textContent--
}

dec.addEventListener('click', decrease)


function increase () {
    header.textContent++
}

inc.addEventListener('click', increase)


function reset() {
    header.textContent = 0
}
res.addEventListener('click', reset)


let Decrease = () => {
    Body.style.backgroundColor = 'yellow'
}
dec.addEventListener('click', Decrease)

let Increase = () => {
    Body.style.backgroundColor = 'green'
}
inc.addEventListener('click', Increase)

let Reset = () => {
    Body.style.backgroundColor = 'red'
}
res.addEventListener('click', Reset)







 