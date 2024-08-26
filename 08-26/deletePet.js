const {pets} = require("./models/model");

function deletePetByName(name) {
    return pets.splice(pets.indexOf(pets.find(pet => pet.name == name)),1);
};

module.exports = {
    deletePetByName,
}