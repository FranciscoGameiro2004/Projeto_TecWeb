function associarProduto(codigo){
    /*
    Organização de cada produto:
    [Código do produto],[Nome do produto],[Preço],[[Existe Promocao?],[Preço original],[% Desconto]],[[Thumbnail],[[Foto 1],[Foto 2], ... , [Foto N]],[Avaliação],[Descrição breve],[Detalhes]
    I      0                   1             2                             3                                               4                              5             6               7
    */
    listaProdutos = [['01','Bota furada amarela', '30,00€', ['True', '50,00€','-50%'], ['imagens/20_boots.jpg'],2.5,'Cor:Amarelo','Gostaria de obter umas botas mas não se importa de molhar os pés? Este produto é perfeito para si.'],
                     ['02','Vaso regador azul', '15,00€', ['False'], ['imagens/18_watering_can.jpg'],4.5,'Cor:Azul','Uma rega que já não serve para regar que pode ser útil como rega.'],
                     ['03','Regua 1cm', '1,50€', ['True', '2,00€', '25%'], ['imagens/Ruler-1024x1024.jpg'],4,'Material: Metal<br>Unidade de medida: CM','Esta régua é perfeita para medições pequenas e também um porta-chaves perfeito.'],
                     ['04','Talheres acorrentados', '10,00€', ['True', '20,00€', '50%'], ['imagens/chain_fork_01_p-1024x684.jpg'],4.5,'Material: Metal','Gostaria de ter um grande desafio durante a sua refeição? Com estes talheres só speedrunners conseguem em menos de 1 minuto!'],
                     ['05','Kit Chaleira e Caneca', '15,00€', ['True', '20,00€', '25%'], ['imagens/teaset_01_p-1024x687.jpg'],4.5,'Cor:Vermelho<br>Material: Cerâmica','Farto de cafés curtos? Experimente um chá com este kit bem longo!'],
                     ['06','Taça dupla', '5,00€', ['True', '7,50€', '25%'], ['imagens/champagne_01_p-1116x1489.jpg'],4.5,'Material:Vídro','Gosta muito de vinho? Que tal beber ao dobro?<br>Aviso: Se conduzir, NÃO BEBA!!!'],
                     ['07','Canecas de casal', '15,00€', ['True', '20,00€', '25%'], ['imagens/mugs_01_p-1024x692.jpg'],4.5,'Material:Carâmica<br>Cores: Branco e Preto','Gostaria de dar um desafio à sua cara metade?'],
                     ['08','Vassoura horizontal', '7,00€', ['False'], ['imagens/broom_03_p-1116x1682.jpg'],4.5,'Descrição breve do produto 08','Para quê um espanador de pó se existe uma vassoura vertical?<br>CHEGA EM QUALQUER CANTO!!!!!'],
                     ['09','Talheres grossos', '6,00€', ['True', '9,00€', '33%'], ['imagens/thick_set_01_p-1024x687.jpg'],4.5,'Material:Aço Inox','Gostaria de ter um tijolo para atirar mas precisa de talheres para comer? Este produto é a solução!'],
                     ['10','Panela de(pressão)', '15,00€', ['False'], ['imagens/pot_01_p-1024x685.jpg'],4.5,'Material: Aço Inox e Plástico','Gostaria de ter risco de verter aquela sopa muito boa que estás a fazer? Esta panela trás risco garantido!!!'],
                     ['11','Chaveiro multiuso', '1,00€', ['False'], ['imagens/key_01_p-1024x685.jpg'],4.5,'Descrição breve do produto 11','Com esta chave podes pendurar de tudo!<br>(Nota: Inclusive outras chaves!)'],
                     ['12','Canceca alça', '8,00€', ['False'], ['imagens/mug_01_p-1024x694.jpg'],4.5,'Material: Cerâmica','Se gosta de ver as horas enquanto bebe alguma coisa quente, este produto é perfeito para si!'],
                     ['13','Remo inflavel', '10,00€', ['True', '25,00€', '33%'], ['imagens/15_paddle.jpg'],4.5,'Material: Plástico<br>Ar não incluído.','Gostaria de rumar para o nada? Este remo faz esste trabalho por ti!'],
                     ['14','Kit Saleiro e Pimenteiro', '5,00€', ['False'], ['imagens/13_shakers.jpg'],4.5,'Mateiral: Cerâmica','És daqueles que acha que por sal ou pimenta na comida é uma perda de tempo? Com este produto, tu tens a certeza disso!'],]
    
    var found = false                 

    for (let i of listaProdutos){
        console.log(i)
        if (i[0] == codigo){
            found = true
            console.log(`Código do produto: ${i[0]}`)
            document.getElementById('nomeProdutoDestacado').innerHTML = i[1]
            document.getElementById('tituloProduto').innerHTML = i[1]
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
            
            document.getElementById('avaliacaoProdutoDestacado').innerHTML = `${estrela} ${i[5]}/5★`
            document.getElementById('imagemProdutoDestacado').src = i[4][0]
            document.getElementById('precoProdutoDestacado').innerHTML = i[2]
            document.getElementById('detalhesProdutoDestacado').innerHTML = i[6]
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
        document.getElementsByClassName('estrela')[i].style.color = 'gray'
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