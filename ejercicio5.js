function ponerNombre() {
    const ayuda = document.getElementById("ayuda");
    ayuda.textContent = "Aquí debe ir el nombre";

    //ayuda.innerHTML = "<span>Aquí debe ir el nombre</span>"
}

function ponerApellidos() {
    const ayuda = document.getElementById("ayuda");
    ayuda.textContent = "Aquí debe ir los apellidos";
}

function ponerCiudad() {
    const ayuda = document.getElementById("ayuda");
    ayuda.textContent = "Aquí debe ir la ciudad";
}

function quitarAyuda() {
    const ayuda = document.getElementById("ayuda");
    ayuda.textContent = "";
}

document.getElementById("nombre").addEventListener("focus", ponerNombre);
document.getElementById("apellidos").addEventListener("focus", ponerApellidos);
document.getElementById("ciudad").addEventListener("focus", ponerCiudad);
document.getElementById("nombre").addEventListener("blur", quitarAyuda);
document.getElementById("apellidos").addEventListener("blur", quitarAyuda);
document.getElementById("ciudad").addEventListener("blur", quitarAyuda);
