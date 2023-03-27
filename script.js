// //Parte 1

// const booleano1 = true
// const booleano2 = false

// const number = "23"

// console.log(number==23)

// // if (booleano1 === true) {
// //     alert("o booleano1 é true")
// // } else{
// //     alert("O booleano1 é false")
// // }

// //Parte 2

// const booleano3 = true

// if ( booleano1 === booleano2 ){
//     alert("O booleano 1 é igual ao 2")
// } else if (booleano2 ===booleano3){
//     alert("o booleano 2 é igual ao 3")
// } else if (booleano1 === booleano3){
//     alert("o booleano 1 é igual ao 3")
// } else {
//     alert("não existem valores iguais")
// }

// const anoNascimento = prompt("Qual o ano do seu nascimento?")
// const anoAtual = prompt("Qual o ano atual?")
// let idade = anoAtual - anoNascimento

// if (idade < 16) {
//     alert(`Você não tem idade para votar`)
// } else if ((idade >= 16 && idade < 18) || (idade >= 75)) {
//     alert("O seu voto é facultativo")
// } else {
//     alert("O voto é obrigatório")
// }



// if (idade >= 18) {

//     if(idade >=70){
//         alert("voto facultativo")
//     } else{
//         alert("voto obrigatório")
//     }
// } else {

//     if(idade>=16){
//         alert("voto facultativo")

//     }else{
//         alert("não pode votar")
//     }
    
// }

const media = prompt("qual a sua média?")

if (media >= 5 && media <=10 ){
    alert ("Parabéns, você foi aprovado")
} else if(media >=3 && media < 5) {
    alert("Você está de recuperação")
} else if(media < 3) {
    alert("Você foi reprovado")
} else {
    alert("dado inválido")
}

