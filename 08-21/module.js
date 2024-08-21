function sayHello() {
    console.log("Hello world");
};

function sayMyName(name) {
    console.log(`My name is ${name}`);    
};

function cooking(food) {
    console.log(`Cooking ${food}`);
};



module.exports = {
    sayHello,
    sayMyName,
    cooking,
};