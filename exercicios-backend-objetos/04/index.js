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

for (let maiorDeIdade of usuarios) {
    if (maiorDeIdade.idade >= 18) { 
        maiorDeIdade.maiorDeIdade = true
    } else {
        maiorDeIdade.maiorIdade = false
    }
}
console.log(usuarios);