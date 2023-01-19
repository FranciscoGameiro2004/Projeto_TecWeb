function associarProduto(codigo){
    /*
    Organização de cada produto:
    [Código do produto],[Nome do produto],[Preço],[[Existe Promocao?],[Preço original],[% Desconto]],[[Thumbnail],[[Foto 1],[Foto 2], ... , [Foto N]],[Avaliação],[Descrição breve],[Detalhes]
    I      0                   1             2                             3                                               4                              5             6               7
    */
    listaProdutos = [['01','Bota furada amarela', '3,00€', ['False'], ['imagens/20_boots.jpg'],3,'Detalhes produto 01','Detalhes breve do produto 01'],
                     ['02','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 02','Detalhes produto 02'],
                     ['03','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 03','Detalhes produto 03'],
                     ['04','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 04','Detalhes produto 04'],
                     ['05','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 05','Detalhes produto 05'],
                     ['06','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 06','Detalhes produto 06'],
                     ['07','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 07','Detalhes produto 07'],
                     ['08','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 08','Detalhes produto 08'],
                     ['09','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 09','Detalhes produto 09'],
                     ['10','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 10','Detalhes produto 10'],
                     ['11','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 11','Detalhes produto 11'],
                     ['12','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 12','Detalhes produto 12'],
                     ['13','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 13','Detalhes produto 13'],
                     ['14','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['https://www.theuncomfortable.com/wp-content/uploads/2017/04/24_long_mug.jpg'],4.5,'Descrição breve do produto 14','Detalhes produto 14'],]
    
    var found = false                 

    for (let i of listaProdutos){
        console.log(i)
        if (i[0] == codigo){
            found = true
            console.log(`Código do produto: ${i[0]}`)
            document.getElementById('nomeProdutoDestacado').innerHTML = i[1]
            count = 0
            while (true){
                estrela = ' '
                
                if (count < i[5]){
                    estrela = estrela.replace(' ', '★ ')
                    count = count + 1
                }
                else{
                    break
                }
            }
            
            document.getElementById('avaliacaoProdutoDestacado').innerHTML = `${estrela} ${i[5]}`
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

function ok(){
    nEstrelas = document.forms["formAvaliacao"]["avaliação"].value
    console.log(nEstrelas)

    for (let i = 0; i < nEstrelas; i++){
        document.getElementsByClassName('estrela')[i].style.color = 'yellow'
    }
    for (let i = nEstrelas; i < 5; i++){
        document.getElementsByClassName('estrela')[i].style.color = 'black'
    }
}