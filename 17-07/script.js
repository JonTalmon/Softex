let posicoes = ["Ouro", "Prata", "Bronze", "Nada"];

function medalhaDeAcordoComPosicao(posicao) {
    if(posicao === 1) {
        return console.log(`Sua posição é: ${posicoes[0]}! Parabéns!`);
    } else if (posicao === 2) {
        return console.log(`Sua posição é: ${posicoes[1]}!`);
    } else if (posicao === 3) {
        return console.log(`Sua posição é: ${posicoes[2]}!`);
    } else {
        return console.log(`Você não ganhou ${posicoes[3]}.`)
    }
}

function aMesmaCoisaSoQueComSwitch(posicao) {
    switch (posicao) {
        case 1:
            return console.log(`Sua posição é: ${posicoes[0]}! Parabéns!`);
        case 2:
            return console.log(`Sua posição é: ${posicoes[1]}!`);
        case 3:
            return console.log(`Sua posição é: ${posicoes[2]}!`);
        default:
            return console.log(`Você não ganhou ${posicoes[3]}.`);
    }
}

medalhaDeAcordoComPosicao(1);
medalhaDeAcordoComPosicao(2);
medalhaDeAcordoComPosicao(3);
medalhaDeAcordoComPosicao(5);

aMesmaCoisaSoQueComSwitch(1);
aMesmaCoisaSoQueComSwitch(2);
aMesmaCoisaSoQueComSwitch(3);
aMesmaCoisaSoQueComSwitch(99);