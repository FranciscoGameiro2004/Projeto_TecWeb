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
        button.addEventListener("click", adicionarProdutoClicado)
    }

}

function adicionarProdutoClicado(event) {
    var botao = event.target
    var produto = botao.parentElement.parentElement
    console.log(produto)
    var titulo = produto.getElementsByClassName("titulo")[0].innerText
    console.log(titulo)
    var preco  = produto.getElementsByClassName("preco")[0].innerText
    console.log(preco)
    var imagemSrc = produto.getElementsByClassName("foto")[0].src
    console.log(imagemSrc)
    imagemSrcFinal = imagemSrc.substring(22,)
    console.log(imagemSrcFinal)
    adicionarProdutoCarrinho(titulo,preco,imagemSrcFinal)
    //update
}
function adicionarProdutoCarrinho(titulo,preco,imagemSrc){
    var linha = document.createElement("div") //cart row
    linha.classList.add("carinhoProdutosLinha")
    var carrinhoProdutos = document.getElementsByClassName("carinhoProdutos")[0]//cart items
    var carrinhoProdutosNomes = document.getElementsByClassName("carinhoItemTitulo")
    for (var i = 0; i < carrinhoProdutosNomes.length; i++) {
        if (carrinhoProdutosNomes[i].innerText == titulo) {
            alert('O item já se encontra na lista')
            return
        }
    }
    var linhaConteudo = 
    `
        <div class="carrinhoItem">
            <img class="carrinhoItemImg" src=${imagemSrc}" alt="Foto do Produto">
            <div>
                <p class="carinhoItemTitulo">${titulo}</p>
            </div>
        </div>

        <div class="carrinhoQuantidade">
            <input class="carrinhoQuantidadeInp" type="number" value = "1" name="QUANTIDADE" min="1" max="10">
        </div>

        <div class="carrinhoPreco">
            <p>€ <span>${preco}</span></p>
            <input type="button" class="carrinhoQuantidadeBtn" value="Remover">
        </div>
    `
    linha.innerHTML = linhaConteudo
    carrinhoProdutos.append(linha)
}