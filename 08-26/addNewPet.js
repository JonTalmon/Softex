const {pets} = require("./models/model");

function addNewPet(id, name, race, disease, owner) {
    const newPet = {
        id,
        name,
        race,
        disease, 
        owner,
    };
    pets.push(newPet);
};

module.exports = {
    addNewPet,
}