function* myGenerator() {
  let a = yield "Первое значение";
  console.log("a:", a);

  let b = yield "Второе значение";
  console.log("b:", b);

  return "Конец";
}

const gen = myGenerator();

console.log(gen.next()); // { value: "Первое значение", done: false }
console.log(gen.next(10)); // "a: 10" => { value: "Второе значение", done: false }
console.log(gen.next(20)); // "b: 20" => { value: "Конец", done: true }
