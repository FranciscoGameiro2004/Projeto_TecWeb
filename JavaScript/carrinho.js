start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
}

function testeClick() {
    console.log("testeClick ");
}

function ready() {
    var adicionarProduto = document.getElementsByClassName("btnAdd")
    for (var i = 0; i < adicionarProduto.length; i++) 
    {
        var button = adicionarProduto[i]
        button.addEventListener("click", function () { testeClick() })
    }

}

function adicionarProdutoClicado(event) {
    var botao = event.target
    var 
}