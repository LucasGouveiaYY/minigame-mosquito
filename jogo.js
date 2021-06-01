var altura = 0 
var largura = 0 //Declarar as variáveis aqui fora para se tornar global, se elas forme criadas diretas dentro da função só poderar ser utilizada lá.
var vidas = 1 
var tempo = 100//parte 8
var pontuacao = 1

var criaMosquitoTempo = 1500

var nivel = window.location.search //serch diferente do href, ele recupera apenas o que vem da interrogação em diante
nivel = nivel.replace('?','')
 // pegamos tudo o que há dentro da variavel nivel e o replace procura o primeiro parametro e no segundo ele substitui aquela string pela outra

 if(nivel === 'normal'){
    criaMosquitoTempo=1500
    tempo = 10

 }else if(nivel === 'dificil'){
    criaMosquitoTempo=1000
    tempo = 45

 }else if(nivel==='chucknorris'){
    criaMosquitoTempo=800
    tempo = 60

 }

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth 
    console.log(altura , largura) 
}
ajustaTamanhoPalcoJogo()

//parte 8
var cronometro = setInterval(function(){
    tempo = tempo - 1
    if(tempo <0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href ='vitoria.html'


    }else{
    document.getElementById('cronometro').innerHTML= tempo //Adicionar um valor dentro das tags no html (no caso o span)
  }
},1000)

function posicaoRandomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

        if(vidas >=3) {
            window.location.href ='fim_de_jogo.html'
            } else{
            document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"

            vidas++
        }   
}

    var posicaoX = Math.floor(Math.random() * largura) -90 //math.random vai de 0 a 1, por isso multiplicamos pela largura e altura
    var posicaoY = Math.floor(Math.random() * altura) -90 // colocamos o - 90 porque a imagem pode acabar passando do limite da tela por conta das bordas

    
    posicaoX = posicaoX <0 ? 0 : posicaoX //se for menor que 0 recebe 0 se não recebe ela mesma
    posicaoY = posicaoY <0 ? 0 : posicaoY



    console.log(posicaoX, posicaoY)
    

    var mosquito = document.createElement('img') //cria um elemento html e mostra que tipo ela é, no caso img
    mosquito.src = 'imagens/mosquito.png' //src para especificar onde está  
    mosquito.className =tamanhoAleatorio() + ' ' + ladoAleatorio() //atribuir uma classe para a var mosquito
    mosquito.style.left = posicaoX + 'px' //basicamente igual css da esquerda irá ficar "X"pixels da esquerda
    mosquito.style.top = posicaoY + 'px'//basicamente igual css do topo irá ficar "X"pixels do topo
    mosquito.style.position = 'absolute'// para o left e top funcionar precisa do absolute
    document.body.appendChild(mosquito) //adicionando um filho para o body
    mosquito.id = 'mosquito'
    var apagar = mosquito.onclick = function abacate(){
        this.remove()
        
    if(mosquito.onclick){
        var recebe = 'clicou'
        document.getElementById('pontos').innerHTML= pontuacao
        pontuacao = pontuacao + 1
        
    }else if(recebe = 'clicou'){
        console.log(recebe)

    }


        //this ajusta o contexto de um determinado atributo ou metodo      
    }
    
    //atraves do ponto consegue acessar os atributos desses elementos 
    
} // fim da function posicao randomica




function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'

    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    
}   
}
