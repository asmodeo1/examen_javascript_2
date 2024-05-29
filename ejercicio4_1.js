const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const extremadura = ["Cáceres", "Badajoz"];
const aragon = ["Huesca", "Teruel", "Zaragoza"];

function mostrarGalicia() {
    mostrarProvincias(galicia);
}

function mostrarAragon() {
    mostrarProvincias(aragon);
}

function mostrarExtremadura() {
    mostrarProvincias(extremadura);
}

function mostrarProvincias(listaProvincias){
    const provincias = document.getElementById('provincias');
    provincias.textContent = "";
    for (const provincia of listaProvincias) {
        const div = document.createElement("div");
        div.classList.add("bg-light-subtle", "m-2");
        div.textContent = provincia;
        provincias.appendChild(div);
    }
}

document.getElementById('galicia').addEventListener("click", mostrarGalicia);
document.getElementById('aragon').addEventListener("click", mostrarAragon);
document.getElementById('extremadura').addEventListener("click", mostrarExtremadura);


