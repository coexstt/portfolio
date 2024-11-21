document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('openForm');
    const formContainer = document.getElementById('formContainer');
    const overlay = document.getElementById('overlay');
    const closeFormButton = document.getElementById('closeForm');

    // Exibe o formulário ao clicar no botão "Fale comigo"
    openFormButton.addEventListener('click', function() {
        formContainer.style.display = 'block'; 
        overlay.style.display = 'block';
    });

    // Fecha o formulário ao clicar no botão "Fechar"
    closeFormButton.addEventListener('click', function() {
        formContainer.style.display = 'none'; 
        overlay.style.display = 'none'; 
    });

    // Fecha o formulário clicando no overlay
    overlay.addEventListener('click', function() {
        formContainer.style.display = 'none'; 
        overlay.style.display = 'none';
    });
});

document.querySelectorAll('a[href^="#page2"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#page3"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });





