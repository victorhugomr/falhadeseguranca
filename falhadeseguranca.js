// Importa a biblioteca que permite ler entrada de usuário a partir da linha de comando
const readline = require('readline');

// Cria uma interface readline para ler a entrada e escrever a saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variável para armazenar o número de usuários
let numUsers = 0;
// Array para armazenar as senhas
const users = [];

// Adiciona um evento para ser chamado quando uma nova linha for lida na entrada
rl.on('line', (line) => {
    // Se ainda não tiver lido o número de usuários, lê esse valor
    if (!numUsers) {
        numUsers = parseInt(line.trim());
    }
    // Caso contrário, adiciona a senha do usuário ao array de senhas
    else{
        users.push(line.trim());
    }

    // Se já tiver lido todas as senhas, chama a função countPairs e imprime o resultado
    if (users.length === numUsers) {
        const pairs = countPairs(users);
        console.log(pairs);
        rl.close();
    }
});

function countPairs(users){
    let count = 0;

    // Percorre todas as combinações possíveis de usuários (i,j)
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users.length; j++) {
            // Se i é diferente de j e a senha do usuário i contém a senha do usuário j, incrementa o contador
            if (i !== j && users[i].includes(users[j])) {
                count++;
            }
        }
    }
    return count;
}
