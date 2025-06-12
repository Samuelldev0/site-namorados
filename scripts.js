function mostrarConteudo() {
    document.getElementById("conteudo").style.display = "block";
    const musica = document.getElementById("musica");
    musica.play().catch(e => {
        console.log("Autoplay bloqueado. Usuário precisa interagir com a página.");
    });

    iniciarSlideshow();
}

function iniciarSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    slides[index].classList.add('ativo');

    setInterval(() => {
        slides[index].classList.remove('ativo');
        index = (index + 1) % slides.length;
        slides[index].classList.add('ativo');
    }, 2000); 
}