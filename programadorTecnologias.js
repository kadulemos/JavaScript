//* 1. Desenvolvedor e Tecnologia

const devs = [
    {
        name: 'Carlos',
        technologies: ['JAVA', 'JavaScript', 'Python', 'Node.JS']
    },
    {
        name: 'Jasmine',
        technologies: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technologies: ['HTML', 'Node.JS']
    }
]

function printDev(developer) {
    for(let dev of developer) {
        console.log(`${dev.name} work with ${dev.technologies}.`)
    }
}

printDev(devs)

//* 2. Busca por Tecnologias

function checkDevCSS(dev) {
    for (let technologies of dev.technologies) {
        if(technologies == 'CSS')
            return true
    }
    return false
}

for(let dev of devs) {
    const devWorkedWithCSS = checkDevCSS(dev)
    if(devWorkedWithCSS == true) {
        console.log(`The developer ${dev.name} worked with CSS.`)
    }
}