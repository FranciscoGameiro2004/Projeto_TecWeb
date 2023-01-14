const filtrar = document.getElementById("btnSearch")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")


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
btn1.addEventListener('click',function() {testeClick('a')})
btn2.addEventListener('click',function() {testeClick('b')})
btn3.addEventListener('click',function() {testeClick('c')})