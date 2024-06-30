#!/usr/bin/node
const array = process.argv;
const min = Number.MIN_SAFE_INTEGER;
let Max = min;
let secMax = min;
if (array.length < 4) {
  console.log(0);
} else {
  for (let i = 2; i < array.length; i++) {
    if (array[i] > Max) {
      secMax = Max;
      Max = array[i];
    } else {
      if (array[i] > secMax) {
        secMax = array[i];
      }
    }
  }
  console.log(secMax);
}
