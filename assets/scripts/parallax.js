let hill = document.querySelector('.hill')
let mountain = document.querySelector('.mountain')
let bushes = document.querySelector('.bushes')
let nebula = document.querySelector('.nebula')
let starsFront = document.querySelector('.stars-front')
let glow = document.querySelector('.glow')
let starsBack = document.querySelector('.stars-back')
let clouds = document.querySelector('.clouds')
let btn = document.querySelector('.btn')
let text = document.querySelector('.text')

window.addEventListener('scroll', () => {
    let value = window.scrollY
    starsFront.style.left = value * 0.2 + 'px'
    starsBack.style.right = value * 0.1 + 'px'
    glow.style.top = value * 0.3 + 'px'
    clouds.style.top = value * 0.3 + 'px'
    hill.style.bottom = value * 0.3 + 'px'
    mountain.style.left = value * 0.1 + 'px'
    bushes.style.bottom = value * 0.2 + 'px'
    nebula.style.top = value * 0.1 + 'px'
})

