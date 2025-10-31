// Isto é um comentário. O JS não o lê

/* Este comentário pode ter várias linhas
*/

// Exibe um alerta na tela do usuário (último recurso)

// Exibe dados no console do navegador (ótimo para depuração)
console.log("Olá amiguinhos!");
console.warn("Devo aparecer amarelinho");
console.error("Posso aparecer vermelhinho");

// para criar variáveis usamos var, let e const
// var é uma forma primitiva e tem escopo global (evitar)
var texto = "Um texto muito louco"
console.log("Variavel texto: " + texto);

// let tem escopo local e é mais indicado
let ano = 2025;
console.log("Variável ano:", ano);

// Const cria um valor que jamais poderá ser alterado
const pi = 3.14;
console.log("Variável pi = " + pi, "Sempre usam isso para const")

/*
O JS é fracamente tipado, ou seja, não falamos o tipo de variável e ela 
pode mudar de tipo bastando passar um novo valor para ela.

No JS não existe explicitamente flot e int, tudo é number
*/

// Podemos transportar um elemento do HTML para o JS
// Usamos a função getElementById ou similar 
// A página como um todo é chamada de document e tudo vem dela.

let nome = document.getElementById('nome');
let idade = document.getElementById('idade');


/* O JS, ao abrir uma página mapeia toda a página de internet e transforma tudo 
em variáveis ramificadas (objetos). 

O document possui todo o HTML da página mepeado como propriedades.

Ex de como pegar todo o body da página: document.body
*/

document.title = "Troquei o tittle da pagina com o JS!";

function calcularIdade(){
    let idade = ano - nascimento;
    console.log(`Você nasceu em ${nascimento.value}, estamos em ${ano} então você tem ${idade}`); 
}
