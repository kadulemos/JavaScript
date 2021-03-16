// criando um programa que calcula a média
// das notas entre os alunos e envia
// mensangem do cálculo na condicional

const aluno1 = 'Kadu'
const notaAluno1 = 10

const aluno2 = 'Laertes'
const notaAluno2 = 9.8

const aluno3 = 'Maik'
const notaAluno3 = 7

const media = (notaAluno1 + notaAluno2 + notaAluno3)/3

console.log(media)

// > Utilizando a condicional, será exibido a mensagem conforme a média

if (media >= 7) {
    console.log('Parabéns!')
} else {
    console.log('É preciso melhorar.')
}