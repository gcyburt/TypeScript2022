type Combinable = number | string;

function combine(x: Combinable, y: Combinable) {
  let result: string | number;
  if (typeof x === "number" && typeof y == "number") {
    result = +x + +y;
  } else {
    result = x.toString() + y.toString();
  }
  return result;
}

console.log(combine(5, "10"));
