document.addEventListener('DOMContentLoaded', function() {
    diasbleAll()
    homeShow()  
})
    
function diasbleAll() {
    document.getElementById('home').style.display     = 'none'
    document.getElementById('projetos').style.display = 'none'
    document.getElementById('proj1').style.display    = 'none'
    document.getElementById('contato').style.display  = 'none'
    document.getElementById('proj2').style.display    = 'none'

    window.scrollTo({top: 0, behavior: 'smooth'})
}

function homeShow() {
    diasbleAll()
    document.getElementById('home').style.display     = 'block'
}

function projetosShow() {
    diasbleAll()
    document.getElementById('projetos').style.display = 'block'
}

function proj1Show() {
    diasbleAll()
    document.getElementById('proj1').style.display    = 'block'
}

function proj2Show() {
    diasbleAll()
    document.getElementById('proj2').style.display    = 'block'
}

function contatoShow() {
    diasbleAll()
    document.getElementById('contato').style.display  = 'block'
}