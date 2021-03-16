//> Cálculo de aposentadoria

const nome = 'Silvana';
const sexo = 'F';
const idade = 55;
const contribuicao = 30;

if (sexo == 'F') {
    if ((contribuicao >= 30) && ((idade + contribuicao) >= 85)) {
        console.log(nome + ', você pode se aposentar!');
    } else {
        console.log(nome + ', você ainda não pode se aposentar.');
    }
} else {
    if((contribuicao >= 35) && ((idade + contribuicao) >= 90)) {
        console.log(nome + ', você pode se aposentar!');
    } else {
        console.log(nome + ', você não pode se aposentar.')
    }
}   