// Programa em JavaScript (.js) para resolver o desafio Classificador de Nível de Herói

// Declarando as varíaveis
let username = "Alvaro_G10" // Coloque seu nome de jogador aqui
let xp = 8706               // Coloque o xp do seu jogador aqui
let nivel = ""              // Não precisa colocar nada aqui

// Estrutura de decisão com vários IFs encadeados para atribuir o nome do nível com base no xp
// Usa operadores relacionais, lógicos e de atribuição
if(xp <= 1000){
    nivel = "Ferro"
}else if((xp >= 1001) && (xp <= 2000)){
    nivel = "Bronze"
}else if((xp >= 2001) && (xp <= 5000)){
    nivel = "Prata"
}else if((xp >= 5001) && (xp <= 7000)){
    nivel = "Ouro"
}else if((xp >= 7001) && (xp <= 8000)){
    nivel = "Platina"
}else if((xp >= 8001) && (xp <= 9000)){
    nivel = "Ascendente"
}else if((xp >= 9001) && (xp <= 10000)){
    nivel = "Imortal"
}else{  // Como só restam valores maiores ou iguais a 10001, já é o caso contrário final (else)
    nivel = "Radiante"
} 

// Imprimindo a frase com o nome do herói e seu nível
// OBS: usei outra forma de concatenação (crases e ${}); o caractere especial "\n" quebra linha
console.log(`\nO Herói de nome ${username} está no nível de ${nivel}.\n`)

// OBS: o desafio já estava resolvido na linha 27
// Mas não havia visto a necessidade de usar um laço de repetição (estava na lista do desafio)
// Então complementei com um sistema que aumenta o xp com o tempo usando o FOR
// Quando o jogador chega ao xp mínimo de um nível, atualiza o mesmo e imprime a mensagem
for (xp; xp<=15000; xp+=0.00005){ // Usando apenas "xp++" era rápido demais, por isso 0.00005
    if((xp >= 1001) && (xp <= 1001.00005)){ // Não aparecia a mensagem apenas com "xp === 1001"
        nivel = "Bronze"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 2001) && (xp <= 2001.00005)){
        nivel = "Prata"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 5001) && (xp <= 5001.00005)){
        nivel = "Ouro"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 7001) && (xp <= 7001.00005)){
        nivel = "Platina"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 8001) && (xp <= 8001.00005)){
        nivel = "Ascendente"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 9001) && (xp <= 9001.00005)){
        nivel = "Imortal"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else if((xp >= 10001) && (xp <= 10001.00005)){
        nivel = "Radiante"
        console.log(`O Herói ${username} upou para ${nivel}!`)
    }else{
        // Nada aqui pra não aparecer milhares de mensagens
    }
}

// Imprimindo a frase final dizendo que o herói chegou ao xp máximo
console.log(`\nO Herói ${username} chegou ao XP Máximo(15k)!\n`)