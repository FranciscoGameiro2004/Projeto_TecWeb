start()

function start() {
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
        update()
    }
}
function ready() {
    var adicionarProduto = document.getElementsByClassName("btnAdd")
    for (var i = 0; i < adicionarProduto.length; i++) 
    {
        var button = adicionarProduto[i]
        button.addEventListener("click", adicionarProdutoClicado)
    }

    var modificarProduto = document.getElementsByClassName("carrinhoQuantidadeInp")
    for (var i = 0; i < modificarProduto.length; i++) 
    {
        var button = modificarProduto[i]
        button.addEventListener("change",quantidadeAlterada)
    }

    var removerProduto = document.getElementsByClassName("btnRemover")
    console.log(removerProduto)
    for (var i = 0; i < removerProduto.length;i++) 
    {
        var button = removerProduto[i]
        console.log(button)
        button.removeEventListener("click", removerProdutoCarrinho)
    }

    //document.getElementsByClassName('finishCart')[0].addEventListener('click', finalizarCompraClicado)
    document.getElementsByClassName('finishCart')[0].addEventListener('click', update)
}
function finalizarCompraClicado() {
    alert('Obrigado por comprar na Bizarra')
    var cartItems = document.getElementsByClassName('carinhoProdutos')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    document.getElementsByClassName('valorTotal')[0].innerText = '€' + 0
    updateCartTotal()
}
function adicionarProdutoClicado(event) {
    var botao = event.target
    var produto = botao.parentElement.parentElement
    //console.log(produto)
    var titulo = produto.getElementsByClassName("titulo")[0].innerText
    //console.log(titulo)
    var preco  = produto.getElementsByClassName("preco")[0].innerText
    //console.log(preco)
    var imagemSrc = produto.getElementsByClassName("foto")[0].src
    //console.log(imagemSrc)
    imagemSrcFinal = imagemSrc.substring(21,)
    //console.log(imagemSrcFinal)
    adicionarProdutoCarrinho(titulo,preco,imagemSrcFinal)
}
function adicionarProdutoCarrinho(titulo,preco,imagemSrc){
    //console.log(imagemSrc)
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
            <span class="precoCar">${preco}</span>
            <button type="button" class="btnRemover">Remover</button>
        </div>
    `
    linha.innerHTML = linhaConteudo
    carrinhoProdutos.append(linha)

    linha.getElementsByClassName('btnRemover')[0].addEventListener('click',removerProdutoCarrinho)
    linha.getElementsByClassName('carrinhoQuantidadeInp')[0].addEventListener('change',quantidadeAlterada)
    update()
}
function removerProdutoCarrinho(event) {
    var botaoClicado = event.target
    botaoClicado.parentElement.parentElement.remove()
    //update()
}
function quantidadeAlterada(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    update()
}
function update() {
    var carrinhoProdutosContainer = document.getElementsByClassName('carinhoProdutos')[0]
    var carrinhoProdutosLinha = carrinhoProdutosContainer.getElementsByClassName('carinhoProdutosLinha')
    //console.log(parseInt(carrinhoProdutosLinha.length))
    var total = 0
    var preco = 0
    for (var i = 0; i < carrinhoProdutosLinha.length; i++) 
    {
        console.log(i)

        var linhaProduto =carrinhoProdutosLinha[i]
        console.log(linhaProduto)
        
        var quantidadeElemento = document.getElementsByClassName("carrinhoQuantidadeInp")[i]
        console.log(quantidadeElemento)

        var quantidade = quantidadeElemento.value
        console.log(quantidade)

        var preçoElemento = document.getElementsByClassName("precoCar")[i]
        console.log(preçoElemento)

        var preco = parseFloat(preçoElemento.innerText.replace('€', ''))
        console.log(preco)

        let totalProduto = quantidade * preco
        console.log(totalProduto)

        total = total + totalProduto
        console.log(total)

        console.log("")
    }
    
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('valorTotal')[0].innerText = '€' + total
    
}
