function add(num1: number, num2: number) {
  return num1 + num2;
}

const n1 = 5;
const n2 = 6;

console.log(add(n1, n2));

let fun: (a: number, b: number) => number;
fun = add;

console.log(fun(n1, n2));
