let {pets} = require("./models/model");

function updatePetsByNameToName(name,rename) {
    pets[pets.indexOf(pets.find(pet => pet.name == name))].name = rename;
};

function updatePetsByNameToId(name,newId) {
    pets[pets.indexOf(pets.find(pet => pet.name == name))].id = newId;
};

function updatePetsByNameToDisease(name,newDisease) {
    pets[pets.indexOf(pets.find(pet => pet.name == name))].disease = newDisease;
};

function updatePetsByNameToOwner(name,newOwner) {
    pets[pets.indexOf(pets.find(pet => pet.name == name))].owner = newOwner;
};

module.exports = {
    updatePetsByNameToName,
    updatePetsByNameToId,
    updatePetsByNameToDisease,
    updatePetsByNameToOwner,
};