class Moto extends Veiculo {
 handlebarType: string;

 constructor(brand:string, model:string, year:number,  handlebarType: string) {
  super(brand, model, year);
  this.handlebarType = handlebarType;
 };

 showInfo(): void {
    super.showInfo();
    console.log(this.handlebarType);
 }
};



let moto = new Moto("BMW", "S1000", 2024, "Drag bar");

moto.showInfo();

