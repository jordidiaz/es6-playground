'use strict';

function* foo() {
  yield 'IPA';
  yield 'APA';
  yield 'Stout';
}

for (const val of foo()) {
  console.log(val);
}

const [...values] = foo();
console.log(values);