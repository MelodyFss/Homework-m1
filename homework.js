'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


if(array.length <=1){
  return array;
}

let pivot = array[Math.floor(Math.random() * array.length)];
let left = [];
let equal = [];
let right = [];

for(let i = 0; i < array.length; i++){ 

  if(array[i] < pivot){
    left.push(array[i]);
  }

  else if(array[i]=== pivot){
    equal.push(array[i]);
  }

  else{
    right.push(array[i]);
  }

}

return quickSort(left).concat(equal).concat(quickSort(right));
}

function split(array){

  let middle = Math.floor(array.length/2);
  let left = array.slice(0,middle);
  let right = array.slice(middle)

  return[left,right];
}


function merge(left,right){

  let leftIndex = 0;
  let rightIndex = 0;
  let array = [];

while(leftIndex < left.length && rightIndex < right.length){

  if(left[leftIndex] < right[rightIndex]){
    array.push(left[leftIndex]);
    leftIndex++;
  }
  else{
    array.push(right[rightIndex]);
    rightIndex++;
  }
}
return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}



function mergeSort(array) {

  

if(array.length === 1){
  return array;
}

let divided = split(array);
let left = divided[0];
let right = divided[1];

return merge(mergeSort(left),mergeSort(right));




}
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
