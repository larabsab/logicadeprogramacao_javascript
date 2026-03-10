// AULA 03
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
//////////////////////

// DESAFIO 03

// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10){
    console.log(contador);
    alert("o numero atual é: " + contador);
    contador++;
}

// 2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorSub = 10;

while (contadorSub >= 0){
    console.log(contadorSub);
    alert("o numero atual é: " + contadorSub);
    contadorSub--;
}

// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contadorRegressivo = prompt('Digite um número para contagem regressiva');
while (contadorRegressivo >= 0){
    console.log (contadorRegressivo);
    contadorRegressivo--;
}

// 4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contadorProgressivoEscolhido = prompt ('Digite um número para contagem progressiva');
let contadorProgressivo = 0;
while (contadorProgressivoEscolhido >= contadorProgressivo){
    console.log(contadorProgressivo);
    contadorProgressivo++;
}