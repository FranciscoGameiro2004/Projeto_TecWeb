function associarProduto(codigo){
    /*
    Organização de cada produto:
    [Código do produto],[Nome do produto],[Preço],[[Existe Promocao?],[Preço original],[% Desconto]],[[Thumbnail],[[Foto 1],[Foto 2], ... , [Foto N]],[Avaliação],[Descrição breve],[Detalhes]
    I      0                   1             2                             3                                               4                              5             6               7
    */
    listaProdutos = [['01','Bota furada amarela', '3,00€', ['False'], ['imagens/20_boots.jpg'],3,'Detalhes produto 01','Detalhes breve do produto 01'],
                     ['02','Vaso regador azul', '15,00€', ['True', '20,00€', '25%'], ['imagens/18_watering_can.jpg'],4.5,'Descrição breve do produto 02','Detalhes produto 02'],
                     ['03','Regua 1cm', '15,00€', ['True', '20,00€', '25%'], ['imagens/Ruler-1024x1024.jpg'],4.5,'Descrição breve do produto 03','Detalhes produto 03'],
                     ['04','Talheres acorrentados', '15,00€', ['True', '20,00€', '25%'], ['imagens/chain_fork_01_p-1024x684.jpg'],4.5,'Descrição breve do produto 04','Detalhes produto 04'],
                     ['05','Kit Chaleira e Caneca', '15,00€', ['True', '20,00€', '25%'], ['imagens/teaset_01_p-1024x687.jpg'],4.5,'Descrição breve do produto 05','Detalhes produto 05'],
                     ['06','Taça dupla', '15,00€', ['True', '20,00€', '25%'], ['imagens/champagne_01_p-1116x1489.jpg'],4.5,'Descrição breve do produto 06','Detalhes produto 06'],
                     ['07','Canecas de casal', '15,00€', ['True', '20,00€', '25%'], ['imagens/mugs_01_p-1024x692.jpg'],4.5,'Descrição breve do produto 07','Detalhes produto 07'],
                     ['08','Vassoura horizontal', '15,00€', ['True', '20,00€', '25%'], ['imagens/broom_03_p-1116x1682.jpg'],4.5,'Descrição breve do produto 08','Detalhes produto 08'],
                     ['09','Talheres grossos', '15,00€', ['True', '20,00€', '25%'], ['imagens/thick_set_01_p-1024x687.jpg'],4.5,'Descrição breve do produto 09','Detalhes produto 09'],
                     ['10','Panela de(pressão)', '15,00€', ['True', '20,00€', '25%'], ['imagens/pot_01_p-1024x685.jpg'],4.5,'Descrição breve do produto 10','Detalhes produto 10'],
                     ['11','Chaveiro multiuso', '15,00€', ['True', '20,00€', '25%'], ['imagens/key_01_p-1024x685.jpg'],4.5,'Descrição breve do produto 11','Detalhes produto 11'],
                     ['12','Canceca alça', '15,00€', ['True', '20,00€', '25%'], ['imagens/mug_01_p-1024x694.jpg'],4.5,'Descrição breve do produto 12','Detalhes produto 12'],
                     ['13','Remo inflavel', '15,00€', ['True', '20,00€', '25%'], ['imagens/15_paddle.jpg'],4.5,'Descrição breve do produto 13','Detalhes produto 13'],
                     ['14','Kit Saleiro e Pimenteiro', '15,00€', ['True', '20,00€', '25%'], ['imagens/13_shakers.jpg'],4.5,'Descrição breve do produto 14','Detalhes produto 14'],]
    
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

let avaliacao = document.forms["formAvaliacao"]
avaliacao.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(document.forms["formAvaliacao"]["avaliação"].value)
    if (document.forms["formAvaliacao"]["avaliação"].value != ''){
       document.getElementById('containerComentários').innerHTML = document.getElementById('containerComentários').innerHTML.replace('<p>Não existe quaisquer comentário.</p>','')
       document.getElementById('containerComentários').innerHTML +=
        `<fieldset>
            <legend>De anônimo | ${document.forms["formAvaliacao"]["avaliação"].value}/5★</legend>
            <p>${document.getElementById("textAreaComentário").value}</p>
        </fieldset>
        <br>` 
    }
});