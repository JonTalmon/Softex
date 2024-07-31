class Gato extends Animal {
    nome: string;
    som: string;
  
    constructor(nome: string, som: string) {
      super(nome, som);
    }
  
    fazerSom(): void {
      return console.log(this.som);
    }
  };
  