const {pets} = require("./models/model");

function readPets() {
    console.log(pets);
};

module.exports = {
    readPets,
}