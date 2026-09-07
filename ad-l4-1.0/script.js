document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que recargue la página por defecto
            
            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Por favor, completa todos los campos del formulario.");
                return;
            }

            // Simulación de envío exitoso
            alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto a través de ${correo}.`);
            
            // Limpiar formulario
            contactForm.reset();
        });
    }
});