class Carro extends Veiculo {
 numberOfDoors: number;

 constructor(brand:string, model:string, year:number, numberOfDoors:number) {
  super(brand, model, year);
  this.numberOfDoors = numberOfDoors;
 };

 showInfo(): void {
    super.showInfo();
    console.log(this.numberOfDoors);
 }
};


const carro = new Carro("Audi", "R8", 2008, 2);
carro.showInfo();