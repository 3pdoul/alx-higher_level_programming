#!/usr/bin/node
const arg = (process.argv);
if (!(2 in arg)) {
  console.log('No argument');
} else {
  console.log(arg[2]);
}
