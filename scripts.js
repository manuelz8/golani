var video = document.getElementById("backgroundVideo");
    
// Función para verificar si el dispositivo es un iPhone o iPad
function isiOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Verificar si es un dispositivo iOS y desactivar el autoplay
if (isiOS()) {
    video.removeAttribute("autoplay");
}
        
        
        // Obtenemos una referencia al video
        var video = document.getElementById("backgroundVideo");

        // Función para reproducir el video
        function playVideo() {
            if (video.paused) {
                video.play();
            }
        }

        // Manejadores de eventos para la interacción del usuario
        document.addEventListener("click", playVideo);
        document.addEventListener("scroll", playVideo);