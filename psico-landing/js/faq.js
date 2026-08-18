document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.faq-item');

  items.forEach(function (item) {
    var button = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');

    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      // Fecha os outros itens (comportamento tipo acordeon)
      items.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-answer').style.maxHeight = null;
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
