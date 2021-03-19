const users = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]

function sumNumbers(numbers) {
    let sum = 0

    for(let number of numbers) {
        sum = sum + number
    }

    return sum
}

function calculatedSum(revenue, expenses) {
    const sumRevenue = sumNumbers(revenue)
    const sumExpenses = sumNumbers(expenses)

    return sumRevenue - sumExpenses
}

for(let user of users) {
    const balance = calculatedSum(user.receitas, user.despesas)

    if(balance > 0) {
        console.log(`The user ${user.nome} has a positive balace of ${balance.toFixed(2)}.`)
    } else {
        console.log(`The user ${user.nome} has a negative balance of ${balance.toFixed(2)}`)
    }
}