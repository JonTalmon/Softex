console.log("Exercicio 1");

let greetings = (name) => console.log("Olá, " + name);


greetings("Jônatas");

//****************************************************************************************************************

console.log("Exercicio 2");

let sqroot = (number) => console.log(number * number);

sqroot(9);

console.log("Exercicio 3");

//****************************************************************************************************************

let double = (num2) => console.log(num2 * 2);

double(45);

console.log("Exercicio 4");

//****************************************************************************************************************

let divide = (num3, num4) => console.log(num3 / num4);

divide(6,3);

console.log("Exercicio 5");

//****************************************************************************************************************

function oldEnough(age) {
    if(age > 18) {
        return console.log(true);
    } else return console.log(false);
}

oldEnough(17);
oldEnough(24);

console.log("Exercicio 6");

//****************************************************************************************************************

let cubic = (num5) => console.log(Math.pow(num5, 3));

cubic(2);

console.log("Exercicio 7");

//****************************************************************************************************************

function isPositive(num6) {
    if(num6 > 0) {
        return console.log(true);
    } else  if (num6 == 0) {
        return console.log("Number is 0");
    } else return console.log(false);
}

isPositive(12);
isPositive(0);
isPositive(-4);

console.log("Exercicio 8");

//****************************************************************************************************************

function isVogal(letter) {
    if(typeof letter == "string") {
        switch (letter) {
            case ("a"):
            case ("e"):
            case ("i"):
            case("o"):
            case("u"):
                return console.log(true);
            default:
                return console.log(false);
        }
    } else {
        console.log("insert a valid string");
    }
}

isVogal("a");
isVogal("e");
isVogal("i");
isVogal("o");
isVogal("u");
isVogal("n");
isVogal(3);

console.log("Exercicio 9");

//****************************************************************************************************************

function chageToUppercase (sentence) {
    return console.log(sentence.toUpperCase());
}

chageToUppercase("testando");

console.log("Exercício 10")

//****************************************************************************************************************

function oddOrEven(num7) {
    if(num7 % 2 == 0) {
        return console.log("Even");
} else return console.log("Odd");
}

oddOrEven(2);
oddOrEven(7);

console.log("Exercício 11")

let celsiusToFahrenheit = (temperature) => console.log(temperature * 9/5 + 32 );

celsiusToFahrenheit(28);