function toggleText(id) {
    const textElement = document.getElementById(id);
    
    // Alternar entre mostrar y ocultar el texto
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block"; // Mostrar el texto
    } else {
        textElement.style.display = "none"; // Ocultar el texto
    }
}

