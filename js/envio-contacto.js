document.querySelector(".contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const messageBox = document.getElementById("formMessage");

    // Mostrar cargando
    messageBox.style.display = "block";
    messageBox.style.opacity = "1";
    messageBox.innerHTML = "<p style='color:#004d40; font-weight:500;'>⏳ Enviando mensaje...</p>";

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        const result = await response.text();

        if (result.includes("✅")) {
            messageBox.innerHTML = "<p style='color:green; font-weight:500;'>✅ Gracias por tu mensaje. Ha sido enviado.</p>";
            form.reset();
        } else {
            messageBox.innerHTML = "<p style='color:red; font-weight:500;'>❌ Hubo un error al enviar tu mensaje. Intenta de nuevo.</p>";
        }

        // Desvanecer el mensaje después de 4 segundos
        setTimeout(() => {
            messageBox.style.transition = "opacity 1s ease";
            messageBox.style.opacity = "0";
            setTimeout(() => {
                messageBox.style.display = "none";
            }, 1000);
        }, 5000);

    } catch (error) {
        messageBox.innerHTML = "<p style='color:red; font-weight:500;'>❌ Error inesperado.</p>";
    }
});