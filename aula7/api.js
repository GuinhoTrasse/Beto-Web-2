/*
    API -> conjunto de regras e protocolos

    fetch, async await, promise

    GET, POST (REQ. HTTP)

*/

const URL = "https://jsonplaceholder.typicode.com/posts/"

function render(){
    // criar os elementos e listar eles na pagina
    console.log("x")
}

async function getData() {
    try {
    const resposta = await fetch(URL);
    
    if(!resposta.ok){
        throw new Error("Erro HTTP" + resposta.status)
    }

    const dados = await resposta.json();

    console.log(dados);

    } catch (erro) {
        console.log("Algo deu errado: ", erro)
    }
}

// getAll() => , getPostId(id) => {}



getData();

/*
    fazer uma página, consumir posts e comments do jsonplaceholder
    tem que usar de alguma forma o MAP, FILTER e REDUCE, os combinando
    implementar a busca por email e por id do post
    fetch para os user, comments e posts, imprimir bonito
    se clicar em outro link (post por exemplo) carregar os comentários (pesquisa em cima por nome, id, qualquer tipo de pesquisa 2 pelo menos) e a quantidade de itens carregados
*/