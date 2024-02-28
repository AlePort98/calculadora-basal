let button = document.getElementById("calcular")
button.addEventListener("click", calcular)

function calcular() {
    const input = document.getElementById("peso")
    const peso = parseInt(input.value)
    const FLU = document.getElementById("flu")
    const MAN = document.getElementById("man")
    const SUP = document.getElementById("sup")

    if (peso > 30) {
        const SC1500 = Math.round(superficieCorporal(peso) * 1500);
        const sc2000 = Math.round(superficieCorporal(peso) * 2000);
        FLU.innerHTML = ("Dosis(1500): ")+ SC1500 + (" cc/hr");
        MAN.innerHTML = ("Mantenimiento(2000): ") + sc2000 + (" cc/hr");
        FLU.style.display = "block";
        MAN.style.display = "block";
        superficie.style.display = "block";
        hollyday.style.display = "none";
        info.style.display = "none";
    } else if (peso > 0 && peso <= 30) {
        const VOLUMEN_DIARIO = hollidaySegar(peso)
        const MANTENIMIENTO = (VOLUMEN_DIARIO / 24);
        const MM2 = Math.round(MANTENIMIENTO * 1.5)
        SUP.innerHTML = ("Volumen Diario" + VOLUMEN_DIARIO + "cc")
        FLU.innerHTML =("dosis por hora: ")+ Math.round(MANTENIMIENTO) + " cc/hr"
        MAN.innerHTML = ("el mantenimiento es: ") + "m+m/2:" + MM2 + " cc/hr"
        FLU.style.display = "block"
        MAN.style.display = "block"
        SUP.style.display = "block"
    } else {
        const ERROR = document.getElementById("error");
        ERROR.style.display = "block";
        FLU.style.display = "none"
        MAN.style.display = "none"
        SUP.style.display = "none"
    }
}

function hollidaySegar(peso) {
    let volumenDiario;
    if (peso <= 10) {
        volumenDiario = peso * 100;
    } else if (peso <= 20) {
        volumenDiario = 1000 + ((peso - 20) * 50)
    } else if (peso <= 30) {
        volumenDiario = 1500 + ((peso - 20) * 20)
    }
    return volumenDiario
}

function superficieCorporal(peso) {
    let superficieCorporal = ((peso * 4) + 7) / (peso + 90);
    return superficieCorporal;
}