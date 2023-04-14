const { arrayMean, affordableHousing, evenEven, makeSentences } = require('./index');

/**
 * @param {boolean} condition
 * @param {string} message
 */
const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw Error(`[x] Assertion failed: ${message}`);
  } else {
    console.log(`[✓] Assertion passed: ${message}`);
  }
};

assert(arrayMean([2, 4, 6, 2, 4, 6]) === 4, 'Sum of [2, 4, 6, 2, 4, 6] should be 4');
assert(arrayMean([]) === undefined, 'Sum of [] is undefined')

const apts = [
  { id: 'orbis', rent: 5000 },
  { id: 'ereve', rent: 12345 },
  { id: 'henesys', rent: 1337 },
];

assert(affordableHousing(apts, 5000).join(',') === 'orbis,henesys', '1 testing');
assert(affordableHousing(apts, 4000).join(',') === 'henesys', '2 testing');

assert(evenEven(), 'undefined is true');
assert(evenEven([]), 'empty is true');
assert(evenEven(['bob']), 'bob is true');
assert(evenEven(['bob', 'steven']), '[bob, steven] is true');
assert(evenEven(['bob', 'steven', 'even']), '[bob, steven, even] is true');
assert(!evenEven(['bob', 'steven', 'anna']), '[bob, steven, anna] is false');

const doggos = [
  { name: 'Sparky', age: 3.35, breed: 'Pomeranian Husky' },
  { name: 'Oreo', age: 5.42, breed: 'Dalmatian' },
  { name: 'Stella', age: 4, breed: 'Alaskan Klee Kai' },
];

let output = 'Sparky is 3.4 years old and is a Pomeranian Husky,Oreo is 5.4 years old and is a Dalmatian,Stella is 4.0 years old and is a Alaskan Klee Kai';

assert(makeSentences(doggos).join(',') === output, 'doggos test');