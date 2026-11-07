localStorage.setItem("theme1", "dark"); // gravar (chave, valor)
localStorage.setItem("theme2", "ambar"); // gravar (chave, valor)

const theme = localStorage.getItem("theme1"); // lê
const x = localStorage.getItem('nu'); // lê

console.log(localStorage.length)

console.log(theme)
console.log(x)

localStorage.removeItem("tema"); // apaga só a chave

localStorage.clear(); // apaga tudo

localStorage.setItem("age", 20);

const tasks = ["estudar", "revisar"]

localStorage.setItem("tasks", tasks)

console.log(localStorage.getItem("tasks"))

/* JSON Javascript Object Notation, é um formato leve, baseado em texto, utilizado para comunicação entre sistemas.

 Json conjunto estruturado {} | listas [], 
 ponto chave -> CHAVE, VALOR

*/

localStorage.setItem("tasks1", JSON.stringify(tasks))

const list_tasks = JSON.parse(localStorage.getItem("tasks1"))

// [{...},{...},{...}.{[...]}]

const y = localStorage.getItem("error") // null

// y.push() errooooooooooooooo (quebraria o codigo)

const z = y === null ? [] : JSON.parse(y) // aceitável, mas não o ideal (pesquisar sobre)

