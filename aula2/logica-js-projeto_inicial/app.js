// AULA 02 

alert('Boas vindas ao jogo do número secreto');

// console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}

///////////////////////////////////////////////

// DESAFIO 2
// 01. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt ('Qual é o dia da semana?');
if (diaDaSemana == 'Sabado' || diaDaSemana == 'Domingo'){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
// 02. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt('Digite um número:');
if (numeroDigitado > 0){
    alert('O número é positivo.');
} else if (numeroDigitado < 0){
    alert('O número é negativo.');
}

// 03. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacaoJogo = prompt ('Digite a pontuação do jogo: ');
if (pontuacaoJogo >= 100){
    alert ('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.')
}

// 04. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 1500;
alert (`O saldo da sua conta é de ${saldoConta}`);

// 05. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeDoUsuario = prompt ('Digite seu nome: ');
alert ('Bem-vindo ' + nomeDoUsuario);