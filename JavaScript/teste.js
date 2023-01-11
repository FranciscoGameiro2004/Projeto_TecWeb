let textoPesquisa;

document.getElementById("btnSearch").onclick = function() {
    textoPesquisa = document.getElementById("textoSearch").value;
    if (textoPesquisa == "") {
        document.getElementById("change").innerHTML = "centerSide";
    }
    else {
        console.log(textoPesquisa);
        document.getElementById("change").innerHTML = textoPesquisa;
    }
}