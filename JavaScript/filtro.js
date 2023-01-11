var produtoSearch;

document.getElementById("btnSearch").onclick = function() 
    {
        textoPesquisa = document.getElementById("textoSearch").value;
        textoProduto = document.getElementById("produtoNome").value;
        console.log(textoPesquisa);
    }