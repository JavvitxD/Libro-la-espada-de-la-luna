// Botón de modo claro / oscuro (se recuerda en este navegador)
(function () {
  var raiz = document.documentElement;
  var boton = document.querySelector('.boton-tema');

  function temaActual() {
    var t = raiz.getAttribute('data-tema');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
  }

  if (boton) {
    boton.addEventListener('click', function () {
      var nuevo = temaActual() === 'oscuro' ? 'claro' : 'oscuro';
      raiz.setAttribute('data-tema', nuevo);
      try { localStorage.setItem('tema', nuevo); } catch (e) {}
    });
  }

  // Flechas del teclado para pasar de capítulo
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var destino = null;
    if (e.key === 'ArrowLeft') destino = document.querySelector('a[rel="prev"]');
    if (e.key === 'ArrowRight') destino = document.querySelector('a[rel="next"]');
    if (destino) window.location.href = destino.href;
  });
})();
