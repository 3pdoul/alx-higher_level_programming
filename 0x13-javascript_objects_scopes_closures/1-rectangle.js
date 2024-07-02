#!/usr/bin/node
class Rectangle {
  constructor(w, h){
  this.height = h;
  this.width=w;
  }
}
const r1 = new Rectangle(2, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);
