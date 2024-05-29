function saludar() {
    const mensaje = document.getElementById('mensaje');
    mensaje.value = "Hola";
}

function despedir() {
    const mensaje = document.getElementById('mensaje');
    mensaje.value = "Adiós";
}

document.getElementById("saludar").addEventListener("click", saludar);
document.getElementById("despedir").addEventListener("click", despedir);
