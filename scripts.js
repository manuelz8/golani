var video = document.getElementById("backgroundVideo");
var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

if (isiOS && window.innerWidth < 768) {
  var userHasInteracted = false;

  // Función para iniciar la reproducción del video cuando se interactúa
  function startVideoOnInteraction() {
    if (!userHasInteracted) {
      video.play();
      userHasInteracted = true;
    }
  }

  // Evento de clic en cualquier parte de la página para iniciar la reproducción
  document.body.addEventListener("click", startVideoOnInteraction);

  // Evento de desplazamiento de página para iniciar la reproducción
  window.addEventListener("scroll", startVideoOnInteraction);

  // También puedes agregar otros eventos, como hover, teclado, etc.

} else {
  // Si no es iOS o es mayor o igual a 768px, reproduce el video automáticamente
  video.play();
}
