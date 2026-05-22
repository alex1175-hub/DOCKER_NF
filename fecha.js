function mostrarReloj() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Agregar 0 si es menor a 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let tiempoActual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("hora").textContent = tiempoActual;
}

function mostrarFecha() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    const fechaActual = `${dia}/${mes}/${anio}`;

    document.getElementById("dia").textContent = fechaActual;
}

// Ejecutar cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
    mostrarFecha();
    mostrarReloj();
    setInterval(mostrarReloj, 1000);
});
