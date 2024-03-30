
function atualizarCronometro() {
  const currentTime = Date.now() / 1000;
  const elapsedTime = currentTime - startTime;

  if (elapsedTime >= tempoLimite) {
    clearInterval(intervalId);
    startTime = null;
    cronometroElement.textContent = '1:20'; 
  } else {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);
    cronometroElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')



let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual é a função da preposição em uma frase?",
    alternativaA : " Indicar o sujeito da ação.",
    alternativaB : " Conectar palavras e estabelecer relações.",
    alternativaC : "Descrever um objeto direto.",
    correta: "Conectar palavras e estabelecer relações.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a diferença entre um advérbio e um adjetivo?",
    alternativaA : "Advérbios descrevem substantivos, enquanto adjetivos descrevem ações.",
    alternativaB : "Advérbios descrevem substantivos, enquanto adjetivos descrevem qualidades de substantivos.",
    alternativaC : "Advérbios descrevem ações, enquanto adjetivos descrevem substantivos.", 
    correta: "Advérbios descrevem substantivos, enquanto adjetivos descrevem ações.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O que é uma metáfora?",
    alternativaA : "Uma figura de linguagem que compara duas coisas usando 'como' ou 'parecido com' ",
    alternativaB : "Uma comparação direta entre duas coisas sem usar 'como' ou 'parecido com'.",
    alternativaC : "Uma forma de exclamação usada para expressar surpresa",   
    correta: "Uma comparação direta entre duas coisas sem usar 'como' ou 'parecido com'.",
}

const q4 = {
    numQuestao   : 4,
    pergunta: "Qual é a conjugação correta do verbo 'amar' na terceira pessoa do singular do pretérito perfeito do indicativo?",
    alternativaA : "Ele amei.",
    alternativaB : " Ele amará.",
    alternativaC : "Ele amou.",
    correta: "Ele amou.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O que é uma antítese?",
    alternativaA : " Uma figura de linguagem que expressa ideias opostas ou contrastantes em uma mesma frase.",
    alternativaB : "Uma forma de interjeição usada para expressar emoções intensas.",
    alternativaC : "Uma comparação direta entre duas coisas usando 'como'ou'parecido com'.",
    correta: "Uma figura de linguagem que expressa ideias opostas ou contrastantes em uma mesma frase.",
}


const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC




a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')



function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')

}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
   
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent


    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
       
        pontos += 10 
    } else {
      
    }

   
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

 
    bloquearAlternativas()

    setTimeout(function() {
      
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}'  \z ,.'

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
   

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
 

 
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
    }, 2000)
}



setTimeout(function(){
window.open.href="pag1.html"
}, 4000);