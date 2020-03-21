// Nome do usuario
const name = prompt  ("Qual seu nome?")

// imprimir na tela
const greeting = document.getElementById ("greeting")
    greeting.innerHTML = "Olá " + name + "!"

// Solicitar se deseja responder a prova
const alternative = prompt ("Olá " + name + "! \nVocê deseja responder nossa prova online? \nResponda com 1 ou 2 (1 - Sim ou 2 - Não)")

// Resposta não
if (alternative == "2" ) {
   const bye = document.getElementById ("bye")
   bye.innerHTML = "Que pena que não deseja responder, mas obrigada por nos visitar!"
} 

//Resposta sim - PROVA
if (alternative == "1") {
    const questionOne = prompt ("Qual o resultado de 2 + 2? (Responda com o número da alternativa 1 ou 2) \n1 - O resultado é 4 \n2 - O resultado é 8 ")
        if (questionOne == "1") {
           const correctOne = document.getElementById ("correctOne")
           correctOne.innerHTML = "Pergunta 1"
        } else if (questionOne == "2") {
            const wrongOne = document.getElementById ("wrongOne")
            wrongOne.innerHTML = "Pergunta 1"
        } 
    const questionTwo = prompt ("Qual o resultado da subtração 20 - 5? (Responda com o número da alternativa 1 ou 2) \n1 - O resultado é 25 \n2 - O resultado é 15")
        if (questionTwo == "2") {
            const correctTwo = document.getElementById ("correctTwo")
            correctTwo.innerHTML = "Pergunta 2"
         } else if (questionTwo == "1") {
             const wrongTwo = document.getElementById ("wrongTwo")
             wrongTwo.innerHTML = "Pergunta 2"
         }
    const questionThree = prompt ("Qual o resultado da multiplicação 3 x 3? (Responda com o número da alternativa 1 ou 2) \n1 - O resultado é 27 \n2 - O resultado é 9")
         if (questionThree == "2") {
           const correctThree = document.getElementById ("correctThree")
           correctThree.innerHTML = "Pergunta 3"
        } else if (questionThree == "1") {
            const wrongThree = document.getElementById ("wrongThree")
            wrongThree.innerHTML = "Pergunta 3"
        }
    const bye = document.getElementById ("bye")
    bye.innerHTML = "Obrigada por participar!" 
}


