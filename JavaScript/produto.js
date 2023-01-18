function associarProduto(codigo){
    /*
    Organização de cada produto:
    [Código do produto],[Nome do produto],[Preço],[[Existe Promocao?],[Preço original],[% Desconto]],[[Thumbnail],[[Foto 1],[Foto 2], ... , [Foto N]],[Avaliação],[Descrição breve],[Detalhes]
    I      0                   1             2                             3                                               4                              5             6               7
    */
    listaProdutos = [['01','Porta chaves 1CM', '3,00€', ['False'], ['https://www.theuncomfortable.com/wp-content/uploads/2018/10/Ruler-1024x1024.jpg'],3,'Detalhes produto 01','Detalhes breve do produto 01'],
                     ['02','Conjunto Vasos Caneca Longa', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 02','Detalhes produto 02']]
    
    var found = false                 

    for (let i of listaProdutos){
        console.log(i)
        if (i[0] == codigo){
            found = true
            console.log(`Código do produto: ${i[0]}`)
            document.getElementById('nomeProdutoDestacado').innerHTML = i[1]
            document.getElementById('avaliacaoProdutoDestacado').innerHTML = `Avaliação: ${i[5]}`
            document.getElementById('imagemProdutoDestacado').src = i[4][0]
            document.getElementById('precoProdutoDestacado').innerHTML = i[2]
            document.getElementById('detalhesProdutoDestacado').innerHTML = i[7]
            document.getElementById('descriçãoProdutoDestacado').innerHTML = i[7]
            if (i[3][0] == 'True'){
                document.getElementById('precoOriginalProdutoDestacado').innerHTML = i[3][1]
                document.getElementById('descontoProdutoDestacado').innerHTML = `-${i[3][2]}`
                document.getElementById('precoOriginalProdutoDestacado').style.visibility = 'visible'
                document.getElementById('descontoProdutoDestacado').style.visibility = 'visible'
            }
            break
        }
    }
    if (found === false){
        window.location.href = '404.html'
    }
}

const urlPar = new URLSearchParams(window.location.search)
codigo = urlPar.get('produto')
associarProduto(codigo)