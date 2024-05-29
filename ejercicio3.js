
function mostrar() {
    const votos1 = document.getElementById('votos1').value;
    const votos2 = document.getElementById('votos2').value;
    const votos3 = document.getElementById('votos3').value;
    const resultado1 = document.getElementById('resultado1');
    const resultado2 = document.getElementById('resultado2');
    const resultado3 = document.getElementById('resultado3');
    resultado1.style.width = votos1 + "px"; // `${votos1}px`
    resultado2.style.width = votos2 + "px"; // `${votos2}px`
    resultado3.style.width = votos3 + "px"; // `${votos3}px`
}



document.getElementById('mostrar').addEventListener("click", mostrar);