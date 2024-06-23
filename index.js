let num = max(6, 3);
console.log(num);

//Write a function that takes two numbers and returns the maximum of the two.

// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

function max(num1, num2) {
  //using ternary operator
  return num1 > num2 ? num1 : num2;
}
