let listaDeNumeroSorteado = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do número secreto")
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10")
}

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Parabéns, você acertou com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1', mensagemTentativas)
        exibirTextoNaTela('p', "Você acertou!")
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', "O número secreto é menor")
        } else {
            exibirTextoNaTela('p', "O número secreto é maior")
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeNumeroLimiteNaLista = listaDeNumeroSorteado.length
    if (quantidadeDeNumeroLimiteNaLista == numeroLimite) {
        listaDeNumeroSorteado = []
    }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        gerarNumeroAleatorio()
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ""
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

exibirMensagemInicial()