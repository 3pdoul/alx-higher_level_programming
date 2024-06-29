#!/usr/bin/node
const array = process.argv;
if (!isNaN(array[2]) && (array.length > 2)) {
  let s = '';
  for (let i = 0; i < array[2]; i++) {
    s += 'X';
  }
  for (let i = 0; i < array[2]; i++) {
    console.log(s);
  }
} else {
  console.log('Missing size');
}
