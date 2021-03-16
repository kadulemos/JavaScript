//> Vetores e Objetos

const usuario = {
    nome: 'Carlos',
    idade: '29'
}
const tecnologias = [
    {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile'
    },
    {
        nome: 'Java',
        especialidade: 'Back-end'
    },
    {
        nome: 'Python',
        especialidade: 'Data Science'
    }
]

console.log(`O desenvolvedor ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${tecnologias[0].nome} com especialidade em ${tecnologias[0].especialidade}.`)