function verificarSinal(num1:number):string {
    if(num1 > 0) {
        return "Positivo"
    } else if (num1 == 0) {
        return "0"
    } else if (num1 < 0) {
        return "Negativo"
    } else {
        return "Entre um valor válido."
    }
}

console.log(verificarSinal(-25));
console.log(verificarSinal(25));
console.log(verificarSinal(0));