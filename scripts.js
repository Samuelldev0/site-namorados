function mostrarConteudo() {
      document.getElementById("conteudo").style.display = "block";
      const musica = document.getElementById("musica");
      musica.play().catch(e => {
        console.log("Autoplay bloqueado. Usuário precisa interagir com a página.");
      });
    }