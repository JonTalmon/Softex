let pets = require("../08-26/models/model");
const {addNewPet} = require("./addNewPet");
const {deletePetByName} = require("./deletePet");
const {readPets} = require("./readPets");
const controllerUpdate = require("./updatePets");

addNewPet(5,"Tobi","Golden retriver", "stomachache", "Mark");
readPets();
deletePetByName("Billy");
readPets();
controllerUpdate.updatePetsByNameToName("Tobi", "Carlos");
readPets();
