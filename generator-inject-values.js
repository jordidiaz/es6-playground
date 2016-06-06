'use strict';

function* favouriteBeer() {
  const reply = yield 'What is your favorite beer type?';
  console.log(reply);
  if (reply !== 'IPA') return 'Wrong!';
  return 'Correct!';
}

{
  const iter = favouriteBeer();
  const q = iter.next().value;
  console.log(q);
  const a = iter.next('Lager').value;
  console.log(a);
}

{
  const iter = favouriteBeer();
  const q = iter.next().value;
  console.log(q);
  const a = iter.next('IPA').value;
  console.log(a);
}