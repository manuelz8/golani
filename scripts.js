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