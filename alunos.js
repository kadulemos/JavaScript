const alunos = [
    {
        nome: 'Carlos',
        nota: 10
    },
    {
        nome: 'José',
        nota: 7
    },
    {
        nome: 'Laertes',
        nota: 10
    }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3

console.log('O cálculo da média é: ' + media)
console.log(alunos)

console.log(alunos[2])