'use strict';

const o1 = { foo: 'bar' }; // Although o1 and o2 look similar but they are not equal as we saw in 11-more, in addition that o3 is not assigned to o1.
const o2 = { foo: 'bar' }; // because o2 is assigned to o3, so by changing o2 then o3 wil change, it;s a function of it "mathematically".
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);