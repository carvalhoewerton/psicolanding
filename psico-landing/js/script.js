// Setup inicial do projeto.
// A lógica de interação (menu mobile, scroll, formulário, animações etc.)
// entra aqui nas próximas etapas.

document.addEventListener('DOMContentLoaded', () => {
  console.log('Projeto carregado — fonte Geist e paleta de azuis ativas.');

  // Menu mobile (hamburguer)
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navMenu.classList.toggle('is-open');
    });

    // Fecha o menu ao clicar em um link (mobile)
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }
});