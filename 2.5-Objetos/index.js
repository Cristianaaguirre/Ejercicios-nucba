class Zapatillas {
  constructor(marca, color, talle) {
    this.marca = marca;
    this.color = color;
    this.talle = talle;
  }
}

const z1 = new Zapatillas('Nike', 'Blanca', 41);
const z2 = new Zapatillas('Adidas', 'Azul', 36);
const z3 = new Zapatillas('Pumas', 'Naranja', 38);
const z4 = new Zapatillas('Reebok', 'Blaco con Negro', 40);
const z5 = new Zapatillas('Convers', 'Amarillo', 35);

const imprimir = e => {
  return `La zapatilla es de la marca ${e.marca}, de color ${e.color} y de talle ${e.talle}`
}

console.log(imprimir(z1));
console.log(imprimir(z2));
console.log(imprimir(z3));
console.log(imprimir(z4));
console.log(imprimir(z5));