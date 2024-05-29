const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const extremadura = ["Cáceres", "Badajoz"];
const aragon = ["Huesca", "Teruel", "Zaragoza"];

function mostrarProvincias(evt) {
    /* Debemos definir la variable fuera de los if, pues si no solo existiría
    en ellos y la necesitamos luego en el for.
    La definimos con let y no const pues en los ifs se le asigna otro valor */
    let listaProvincias;
    // Comprobamos si el id es el del botón de Galicia
    if(evt.target.id == "galicia") {
        listaProvincias = galicia;
    } else if(evt.target.id == "aragon") {
        listaProvincias = aragon;
    } else if(evt.target.id == "extremadura") {
        listaProvincias = extremadura;
    }

    const provincias = document.getElementById('provincias');
    // Borramos el contenido existente
    provincias.textContent = "";
    for (const provincia of listaProvincias) {
        const div = document.createElement("div");
        div.classList.add("bg-light-subtle", "m-2");
        div.textContent = provincia;
        provincias.appendChild(div);
    }
}

document.getElementById('galicia').addEventListener("click", mostrarProvincias);
document.getElementById('aragon').addEventListener("click", mostrarProvincias);
document.getElementById('extremadura').addEventListener("click", mostrarProvincias);


