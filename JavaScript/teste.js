const filtrar = document.getElementById("btnSearch")

const btn2 = document.getElementById("btn2")


function teste() {
    const textChange = document.getElementById("textChange");
    const textoSearch = document.getElementById("textoSearch").value;

    if (textoSearch == "") {
        textChange.innerHTML = "leftSide"
    }
    else {
        textChange.innerHTML = textoSearch
    }

}
function testeClick(texto) {
    console.log(texto)
}

filtrar.addEventListener('click',teste)
