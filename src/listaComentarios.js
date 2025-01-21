var comentarioIndex = 1;
mostraSlides(comentarioIndex);
slideAtual(2)
function somaSlides(n) {
    mostraSlides(comentarioIndex += n);
}

function slideAtual(n) {
    mostraSlides(comentarioIndex = n);
}

function mostraSlides(n) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        comentarioIndex = 1
    }    
    if (n < 1){
        comentarioIndex = slides.length}
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[comentarioIndex-1].style.display = "block";  
    dots[comentarioIndex-1].className += " active";
}