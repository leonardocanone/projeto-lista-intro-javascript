// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    let altura = Number (prompt("Digite a altura do retângulo:"))
    let largura = Number (prompt("Digite a largura do retângulo:"))

    console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
    let anoAtual = Number (prompt("Digite o ano em que estamos:"))
    const anoNascimento = Number (prompt("Em que ano você nasceu?"))

    console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura)
  
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    let nome = prompt("Qual é o seu nome?")
    let idade = prompt("Quel é sua idade?")
    let email = prompt("Digite o seu e-mail:")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    let corFavorita1 = prompt("Qual é sua cor favorita número 1?")
    let corFavorita2 = prompt("Qual é sua cor favorita número 2?")
    let corFavorita3 = prompt("Qual é sua cor favorita número 3?")

    let coresFavoritas = [corFavorita1,corFavorita2,corFavorita3]
    
    console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    let stringMaiuscula = string.toUpperCase() 
    
    return stringMaiuscula  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantosIngressos = custo / valorIngresso

    return quantosIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // aqui diferente dos exercícios anteriores, resolvi colocar a lógica direto no return     
    return string1.length === string2.length 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
        
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
    return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    
    let primeiroElemento = array[0]
    let ultimoElemento = array[array.length -1]

    array[0] = ultimoElemento
    array[array.length -1] = primeiroElemento

    return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
// aqui igualmente ao exercício 8, resolvi colocar a lógica direto no return
    
    return string1.toUpperCase() === string2.toUpperCase() 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    let anoAtual = Number(prompt("Em que ano estamos?"))
    let anoNascimento = Number(prompt("Em que ano você nasceu?"))
    let anoEmissaoIdentidade = Number(prompt("Em que ano sua carteira de identidade foi emitida?"))

    let vinte = (anoAtual - anoNascimento <= 20) && (anoAtual - anoEmissaoIdentidade >= 5)
    let cinquenta = (anoAtual - anoNascimento > 20) && (anoAtual - anoNascimento <= 50) && (anoAtual - anoEmissaoIdentidade >= 10)
    let maiorCinquenta = (anoAtual - anoNascimento > 50) && (anoAtual - anoEmissaoIdentidade >= 15)

    console.log(vinte || cinquenta || maiorCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // let anoBissexto1 = ano % 400 === 0
    // let anoBissexto2 = (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)
    
    let anoBissexto = (ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)

    return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    const maiorDeIdade = prompt("Você tem mais de 18 anos?")
    const temEnsinoMedio = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

    console.log((maiorDeIdade === "sim") && (temEnsinoMedio === "sim") && (disponibilidade === "sim"));

}