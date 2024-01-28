const readline = require('readline');

    // Declaração de variáveis
    let nome = "";
    let rank = "";
    let xp = 0;

    // Criar uma interface readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Receber entrada do usuário para o nome
    rl.question("Digite o nome do herói: ", function(answer) {
        nome = answer;

        // Receber entrada do usuário para o XP
        rl.question("Digite o XP do herói: ", function(answer) {
            xp = parseInt(answer);

            // Processamento
            if (xp <= 1000) {
                rank = "Ferro";
            } else if (xp <= 2000) {
                rank = "Bronze";
            } else if (xp <= 6000) {
                rank = "Prata";
            } else if (xp <= 7000) {
                rank = "Ouro";
            } else if (xp <= 8000) {
                rank = "Platina";
            } else if (xp <= 9000) {
                rank = "Ascendente";
            } else if (xp <= 10000) {
                rank = "Imortal";
            } else {
                rank = "Radiante";
            }

            // Saída de dados
            console.log(`O Herói de nome ${nome} está no nível de ${rank}`);

            // Fechar a interface readline
            rl.close();
        });
    });

