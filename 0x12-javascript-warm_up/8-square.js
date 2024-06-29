#!/usr/bin/node
const array = process.argv;
if (array.length > 2) {
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
