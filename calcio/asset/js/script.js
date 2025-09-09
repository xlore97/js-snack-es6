const squadre = [
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
]


function generaRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = generaRandomNum(0, 90);
    squadre[i].falli = generaRandomNum(0, 100);
}

const risultatiFalli = squadre.map(squadra => {
    return {
        nome: squadra.nome,
        falli: squadra.falli
    };
});

console.log('Squadre con punti e falli generati:', squadre);
console.log('Solo nomi e falli subiti:', risultatiFalli);