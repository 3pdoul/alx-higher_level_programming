#!/usr/bin/node
const array = process.argv;
if ((array.length < 3)) {
  console.log(Number(1));
} else {
  let sum = 1;
  for (let i = 1; i < (array[2]); i++) {
    sum = sum * i;
  }
  sum = sum * array[2];
  console.log(sum);
}
