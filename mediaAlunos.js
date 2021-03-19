const alunosDaTurmaA = [
    {
        nome: "Antonio",
        nota: 10,
        reprovado: false
    },
    {
        nome: "Roberto",
        nota: 9.8,
        reprovado: false
    },
    {
        nome: "Andre",
        nota: 8,
        reprovado: false
    }
]

const alunosDaTurmaB = [
    {
        nome: "Julia",
        nota: 7.9,
        reprovado: false
    },
    {
        nome: "José",
        nota: 0,
        reprovado: false
    },
    {
        nome: "Ana",
        nota: 6.5,
        reprovado: false
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i=0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} é menor que 5.`)
    }
}

function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if(aluno.nota < 5) {
        aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado.`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)