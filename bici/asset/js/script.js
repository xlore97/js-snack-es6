// Array con oggetti Nome e Peso
const biciclette = [
    {
        nome: 'Bianchi oltre XR4',
        peso: '7.8'
    },
    {
        nome: 'Pinarello Dogma F',
        peso: '6.9'
    },
    {
        nome: 'Canyon Aeroad',
        peso: '7.2'
    },
    {
        nome: 'Scott Addict RC',
        peso: '5.1'
    },
]

// La prima bici dell'array è impostata come la più leggera
let bicileggera = biciclette[0];

// Avvio di un ciclo FOR nell'array
for (let i = 1; i < biciclette.length; i++) {
    // Confronto il peso tra la prima bici (bicileggera.peso) e le altre nell'array
    if (biciclette[i].peso < bicileggera.peso) {
        bicileggera = biciclette[i];
    }
}


console.log(`La bici più leggera è: ${bicileggera.nome} con peso di ${bicileggera.peso} kg`);
