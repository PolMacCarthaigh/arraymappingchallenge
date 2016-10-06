var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(value){
  //map takes it every input in the array and passes through function.
  //Map doesnt know which change it I want so I gave it guidance within a callback function.
  return Math.sqrt(value.x * value.x + value.y * value.y); //sqrt = square root using py theory
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

//Jeremy was great at explaining this and getting us over the line.


