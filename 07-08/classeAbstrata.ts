abstract class MusicalInstruments {

    makeSound():void {
        return console.log("Blem");
    }

    usesPick():void {
        return console.log(true);
    }
};

class Guitar extends MusicalInstruments {};

class EletricGuitar extends MusicalInstruments {};

let fender = new EletricGuitar();

let giannini = new Guitar();

fender.makeSound();
fender.usesPick();

giannini.makeSound();
giannini.usesPick();