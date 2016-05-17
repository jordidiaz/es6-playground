'use strict';

const beers = [
  {name: 'Punk IPA', style: 'IPA', price: 3.5, rate: 6},
  {name: 'Imparable', style: 'IPA', price: 4, rate: 7},
  {name: 'Shackeltown', style: 'IPA', price: 4, rate: 8},
  {name: 'Dark Series', style: 'Imperial Stout', price: 4, rate: 8},
  {name: 'Menosca', style: 'Porter', price: 3.5, rate: 7},
  {name: 'Earra', style: 'APA', price: 3.5, rate: 6}
];

const isIPA = b => b.style === 'IPA';
const isGoodBeer = b => b.rate >= 7;
const getPrice = b => b.price;
const reducer = (prev, current) => prev + current;

const totalGoodIPAPrice = beers
  .filter(isIPA)
  .filter(isGoodBeer)
  .map(getPrice)
  .reduce(reducer);

console.log(totalGoodIPAPrice);