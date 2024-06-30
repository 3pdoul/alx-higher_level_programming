#!/usr/bin/node
const array = process.argv;
if ((array.length < 4)) {
  console.log('NaN');
} else {
  const x = parseInt(array[2], 10) + parseInt(array[3], 10);
  console.log(x);
}
