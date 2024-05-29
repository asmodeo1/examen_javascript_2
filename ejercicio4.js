const galicia = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
const extremadura = ["Cáceres", "Badajoz"];
const aragon = ["Huesca", "Teruel", "Zaragoza"];

function mostrarGalicia() {
    const provincias = document.getElementById('provincias');
    /* Con solo esta línea ya muestra los elementos del array separados por comas 
     provincias.textContent = galicia; */
    provincias.textContent = "";
    for (const provincia of galicia) {
        const div = document.createElement("div");
        div.classList.add("bg-light-subtle", "m-2");
        div.textContent = provincia;
        provincias.appendChild(div);
    }
}

function mostrarAragon() {
    const provincias = document.getElementById('provincias');
    provincias.textContent = "";
    for (const provincia of aragon) {
        const div = document.createElement("div");
        div.classList.add("bg-light-subtle", "m-2");
        div.textContent = provincia;
        provincias.appendChild(div);
    }
}

function mostrarExtremadura() {
    const provincias = document.getElementById('provincias');
    provincias.textContent = "";
    for (const provincia of extremadura) {
        const div = document.createElement("div");
        div.classList.add("bg-light-subtle", "m-2");
        div.textContent = provincia;
        provincias.appendChild(div);
    }
}

document.getElementById('galicia').addEventListener("click", mostrarGalicia);
document.getElementById('aragon').addEventListener("click", mostrarAragon);
document.getElementById('extremadura').addEventListener("click", mostrarExtremadura);