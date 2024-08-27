function argumentsLength(...args) {
  let count = 0;
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    count++;
  }
  return count;
}

//Optimal solution

// function argumentsLength(...args) {
//   return args.length;
// }
const argument = argumentsLength(6, 5, 0, {}, null);
console.log(argument);
