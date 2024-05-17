window.addEventListener("load", function () {
  // Ocultar o overlay e mostrar a seção com ID main
  document.getElementById("overlay").style.display = "none";
  document.getElementsByClassName("overlayOff").style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  const mbMenuButton = document.getElementById("mbMenu");
  const menu = document.getElementById("menu");

  // Função para alternar a visibilidade do menu
  function toggleMenu() {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "flex"; // ou "block" dependendo do estilo desejado
    } else {
      menu.style.display = "none";
    }
  }

  // Mostrar/ocultar menu ao clicar no botão
  mbMenuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Previne o evento de clicar do propagação para elementos superiores
    toggleMenu();
  });

  // Fechar o menu ao clicar em qualquer outro lugar da página
  document.addEventListener("click", function (event) {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    }
  });

  // Prevenir o fechamento do menu ao clicar nele próprio
  menu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Fechar o menu ao clicar em qualquer link do menu
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });
});
