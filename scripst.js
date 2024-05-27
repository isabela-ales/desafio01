var nome = prompt('Insira o seu nome: ');
var idade = parseInt(prompt('Insira a sua idade: '));
var anoAtual = parseInt(prompt('Insira o ano atual: '));
var resultIdade = anoAtual - idade;

console.log('Idade: ' + resultIdade);
console.log('Nome: ' + nome);

alert('Seu nome é ' + nome + '! Sua idade é ' + idade + ' e você nasceu no ano ' + resultIdade);
