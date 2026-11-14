const produtos = [
    {nome: "Caderno", preco: 15, categoria: "papelaria", estoque: 10},
    {nome: "Caneta", preco: 3, categoria: "papelaria", estoque: 0},
    {nome: "Mochila", preco: 120, categoria: "acessorios", estoque: 10},
    {nome: "Estojo", preco: 25, categoria: "acessorios", estoque: 7},
    {nome: "Lápis", preco: 15, categoria: "papelaria", estoque: 20},
    {nome: "Borracha", preco: 3, categoria: "papelaria", estoque: 12},
    {nome: "Relógio", preco: 120, categoria: "acessorios", estoque: 2},
    {nome: "Grampo", preco: 25, categoria: "acessorios", estoque: 3}
]

const nums = [3, 7, 2]
const dobros = []

for (const n of nums){
    dobros.push(n * 2)
}

console.log(dobros)

//----------------------

// dobros = nums.map((n) => n * 2) // map retorna um novo vetor


produtos.forEach((p) => {
    console.log(`${p.nome} custa ${p.preco}`)
})

const r = [2, 3, 4].forEach((n) => n * 2) // undefined

const listas = produtos.map((p) => p.nome)

const comDescontos = produtos.map((p) => ({
    nome: p.nome,
    preco: p.preco * 0.9
}))

console.log(comDescontos)

localStorage.setItem("Produtos", JSON.stringify(comDescontos))

const x = [2,3,5].map(n => {n * 2}) // {undefined, undefined, undefined}

// [] <- retorno do map

// const y = [2, 3, 4, 5, 6, 7, 8].filter(n => 5) // filtro retorna uma nova lista com elementos True e False, descartando os Falses

// const y = [2, 3, 4, 5, 6, 7, 8].filter(n => map(p => p * 2))

const notas = [8, 5, 9, 6]

const soma = notas.reduce((acc, n) => acc + n, 0)



// const estoqueDeProdutos = produtos.reduce((estoque, p) => p.estoque + estoque, 0)


// const estoqueDeProdutos = produtos.filter(produtos > 5).produtos.reduce((estoque, p) => p.estoque + estoque, 0)


console.log(estoqueDeProdutos)