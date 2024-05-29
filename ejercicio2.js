
function tirar() {
    const imagen = document.getElementById('imagen');
    // Math.floor(Math.random() * (max - min + 1) + min);
    const numero = Math.floor(Math.random() * 6 + 1);
    if (numero == 1) {
        imagen.src = "dado1.png";
    } else if (numero == 2) {
        imagen.src = "dado2.png";
    } else if (numero == 3) {
        imagen.src = "dado3.png";
    } else if (numero == 4) {
        imagen.src = "dado4.png";
    } else if (numero == 5) {
        imagen.src = "dado5.png";
    } else {
        imagen.src = "dado6.png";
    }
    /* Con un switch
    switch (numero) {
        case 1:
            imagen.src = "dado1.png";
            break;
        case 2:
            imagen.src = "dado2.png";
            break;
        case 3:
            imagen.src = "dado3.png";
            break;
        case 4:
            imagen.src = "dado4.png";
            break;
        case 5:
            imagen.src = "dado5.png";
            break;
        case 6:
            imagen.src = "dado6.png";
            break;
    }*/
    // Todo el if en una línea
    //imagen.src = "dado" + numero + ".png";
    // o imagen.src = `dado${numero}.png`;

}

document.getElementById('tirar').addEventListener("click", tirar);