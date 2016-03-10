// function mult(x,y,z) {
// 	return x * y * z;
// }
//
// mult(3,4,5);	// 60
//
// mult(3,4,5,6);	// Oops!


function mult(...args) {
  // base case
  if (args.length <= 2) {
    return args[0] * args[1];
  }
  // call recursively
  return (
    args[0] * mult(...args.slice(1))
  );
}

console.log(mult(6,6,6));
