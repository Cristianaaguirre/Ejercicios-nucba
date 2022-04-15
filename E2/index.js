class Pizza {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.igrdt = ['queso', 'salsa', 'aceitunas'];
  }
  agregarIngrdt(str) {
    this.igrdt.push(str);
  }
}

const arr = [];

while (arr.length < 5) {
  let id = arr.length + 1;
  let nombre = prompt("Nombre: ");
  let price = Number(prompt("Precio: "));
  let pizza = new Pizza(id, nombre, price);
  while (confirm("¿Desea agregar un ingrediente?")) {
    pizza.agregarIngrdt(prompt("Nombre del ingrediente: "));
  }
  arr.push(pizza);
}

const impar = arr => arr.filter(elm => elm.id % 2 === 1);
const priceLow = arr => arr.filter(elm => elm.price < 600);
const listarNombres = arr => arr.forEach(elm => console.log(`Nombre de la pizza: ${elm.name}`));
const listarPrecios = arr => arr.forEach(elm => console.log(`Precio de la pizza: ${elm.name}`));
const listarNombrePrecios = arr => arr.forEach(elm => console.log(`El el nombre de la pizza es: ${elm.name} y el precio es: ${elm.price}`));

console.log(impar(arr));
console.log(priceLow(arr));
listarNombres(arr);
listarPrecios(arr);
listarNombrePrecios(arr);