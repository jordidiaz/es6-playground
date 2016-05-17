'use strict';

function* fibonacci (n) {
  const isInfinite = n === undefined;
  let current = 0;
  let next = 1;

  while (isInfinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const iterator = fibonacci(10);
let next = iterator.next();

while (next.done === false) {
  console.log(next.value);
  next = iterator.next();
}