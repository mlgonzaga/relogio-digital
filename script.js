let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');



function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();


    if (hour <= 9) {
        horas.innerText = "0" + hour;
    } else {
        horas.innerText = hour;
    }

    if (minute <= 9) {
        minutos.innerText = "0" + minute;
    } else {
        minutos.innerText = minute;
    }

    if (second <= 9) {
        segundos.innerText = "0" + second;
    } else {
        segundos.innerText = second;
    }
}

updateTime();

setInterval(updateTime, 10);
