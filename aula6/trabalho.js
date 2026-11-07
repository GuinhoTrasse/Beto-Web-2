const CHAVE = "tasks"

function load(){
    const text = localStorage.getItem(CHAVE)
    if (text === null) return []
    return JSON.parse(text);

    // ?? NULLISH operater
}

function save(tasks){
    localStorage.setItem(CHAVE, JSON.stringify(tasks))
}

let minha_lista = load(); // []
save(["andar"])

const usuario_digitou = "comer"
minha_lista = load() // ["andar"]

// adicionar comer a minha lista e depois salvar no LS
minha_lista.push(usuario_digitou)
save(minha_lista)

// add action on button
// get text
// create element
// add styles (se colocar o estilo no li n rpecisa fazer nd)
// add event listener (p remover) => usem a func || splice ||
// add append

const adicionar = document.querySelector("#add")
const remover = document.getElementById("#limpar")