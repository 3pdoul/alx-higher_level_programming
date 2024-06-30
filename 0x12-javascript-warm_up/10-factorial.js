#!/usr/bin/node
const array = process.argv;
if ((array.length < 3)) {
  console.log(Number(1));
} else {
  console.log(fac(Number(array[2])));
}

function fac(num) {
  if (num === 0) {
    return (1);
  } else if (num === 1) {
    return (1);
  }
  else {
	  return (num * fac(num-1)); 
  }
}
