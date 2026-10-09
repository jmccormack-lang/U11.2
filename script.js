let listaDeSuper = [];

listaDeSuper.push("Leche");
listaDeSuper.push("Pan");
listaDeSuper.push("Huevos");
listaDeSuper.push("Queso");
listaDeSuper.push("Galletitas");

// 1. Agregar dos productos al final
listaDeSuper.push("Fideos");
listaDeSuper.push("Arroz");

// 2. Agregar dos productos al principio
listaDeSuper.unshift("Manzanas");
listaDeSuper.unshift("Jabón");

// 3. Determinar el largo del arreglo
console.log(listaDeSuper.length);

// 4. Sacar un producto y guardarlo en noHabia
let noHabia = listaDeSuper.pop();
console.log(noHabia);

// 5. Sacar un producto y guardarlo en comprado
let comprado = listaDeSuper.shift();
console.log(comprado);

// 6. Determinar el largo del arreglo ahora
console.log(listaDeSuper.length);

console.log(listaDeSuper);
