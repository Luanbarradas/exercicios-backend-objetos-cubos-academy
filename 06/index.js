const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = []
const adultos = []

for (let jovem of usuarios) {
    if (jovem.idade < 18) {
        jovens.push(jovem);
    } else {
        adultos.push(jovem);
    }
}

console.log("Jovens:", jovens);
console.log("Adultos:", adultos);