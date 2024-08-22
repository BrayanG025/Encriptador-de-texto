const ingresoTexto = document.getElementById("areaTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const muneco = document.getElementById("muneco");
const alertaMensajeFinal = document.getElementById("alertaMensajeFinal");
const campoEncriptados = document.getElementById("campoEncriptados");

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]
 
const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    muneco.classList.add("ocultar");
    ingresoTexto.value = "";
    alertaMensajeFinal.style.display = "none";
    botonCopiar.style.display = "block";
    campoEncriptados.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("ocultar");
    alertaMensajeFinal.style.display = "block";
    botonCopiar.style.display = "none";
    campoEncriptados.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
    function encriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++){
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText;
    };
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
    remplace(encriptar(texto))
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
            function desencriptar(newText) {
        for (let i = 0; i < reemplazar.length; i++) {
            if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return newText;
    }
    }else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
    remplace(desencriptar(texto))
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    reset();
})