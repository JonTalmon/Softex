abstract class Veiculo {
 brand:string;
 model:string;
 year:number;

 constructor(brand:string, model:string, year:number,) {
  this.brand = brand;
  this.model = model;
  this.year = year;
 }

 showInfo():void {
  return console.log(this.brand, this.model, this.year);
 }
};