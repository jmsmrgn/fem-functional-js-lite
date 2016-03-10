function foo(x) {
  return (
    function() {
      return x;
    }
  );
}
//
function add(x, y) {
  return x + y;
}
// // console.log(add(foo(), bar()));
//
function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

// console.log(add2(foo, bar));

// console.log(add2(foo(40), foo(10)));


// function addn(arr) {
//   var sum = 0;
//   for (var i=0; i<arr.length; i++) {
//     sum = add2(foo(arr[i]), foo(sum));
//   }
//   return sum;
// }

// function addn(arr) {
//   if (arr.length <= 2) {
//     return add2(arr[0], arr[1]);
//   }
//   return (
//     addn(
//       [
//         function() {
//           return add2(arr[0], arr[1]);
//         }
//       ]
//       .concat(arr.slice(2))
//     )
//   );
// }
//
//
function addn(...arr) {
  return arr.slice(1)
    .reduce(function(prev, cur) {
      return function() {
        return add2(prev, cur);
      };
    }, arr[0])();
}

// console.log(addn(foo(10), foo(22), foo(34), foo(23)));

// console.log(addn(...[10, 20, 34, 48, 98, 7, 2345].map(foo)));
// console.log(addn(1,2,3,4,5, 9000));
//

function isEven(x) {
  return x % 2 == 0;
}

var arr = [10, 20, 34, 48, 98, 7, 23458]
  .filter(isEven)
  .map(foo);

console.log(addn(...arr));



// function doubleIt(v) {
//   return v * 248;
// }
//
// function transform(arr, fn) {
//   var list = [];
//   for (var i=0; i<arr.length; i++) {
//     list[i] = fn(arr[i]);
//   }
//   return list;
// }
//
// // console.log(transform([1,2,3,4,5], doubleIt));
// console.log([1,2,3,4,5].map(doubleIt));
//
//
// // map
// function zip(arr) {
//   return arr.toUpperCase();
// }
//
// var numbers = ['foo', 'bar', 'swamp'];
// var roots = numbers.map(zip);
// console.log(roots);
//
// //Filter
// function isOdd(v) {
//   return v % 2 == 1;
// }
//
// function exclude(arr, fn) {
//   var list = [];
//   for (var i=0; i<arr.length; i++) {
//     if (fn(arr[i])) {
//       list.push(arr[i]);
//     }
//   }
//   return list
// }
//
// // console.log(exclude([1,2,3,4,5], isOdd));
// console.log([1,2,3,4,5].filter(isOdd));
//
//
// // reduce
// function mult(x) {
//   return x;
// }
//
// function compose(arr, fn, initial) {
//   var total = initial;
//   for (var i=0; i<arr.length; i++) {
//     total = fn(total, arr[i]);
//   }
//   return total;
// }
//
// console.log(compose([1,2,3,4,5], mult, 80));
//
//
// // iteration
// function logValue(v) {
//   console.log(v);
// }
//
// function iterate(arr, fn) {
//   for (var i=0; i<arr.length; i++) {
//     fn(arr[i]);
//   }
// }
//
// // iterate([1,2,3,4,5,6,7,8], logValue);
//
// console.log([1,2,3,4,5,6,7,8].forEach(mult));
