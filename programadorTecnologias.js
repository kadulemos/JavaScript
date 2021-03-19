//* Desenvolvedor e Tecnologia

const dev = [
    {
        name: 'Carlos',
        technologies: [
            'JAVA',
            'JavaScript',
            'Python',
            'Node.JS'
        ]
    },
    {
        name: 'Jasmine',
        technologies: [
            "JavaScript",
            'CSS'
        ]
    },
    {
        name: 'Tuane',
        technologies: [
            'HTML',
            'Node.JS'
        ]
    }
]

function printDev(developer) {
    for(let dev of developer) {
        console.log(`${dev.name} trabalha com ${dev.technologies}.`)
    }
}

printDev(dev)