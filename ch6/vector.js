function Vector (x, y) {
  this.x = x
  this.y = y
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function () { return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))) }
})

Vector.prototype.plusV = function (v) {
  let temp = new Vector(this.x + v['x'], this.y + v['y'])
  return temp
}
Vector.prototype.minusV = function (v) {
  let temp = new Vector(this.x - v['x'], this.y - v['y'])
  return temp
}
Vector.prototype.plus = function (a, b) {
  let temp = new Vector(this.x + a, this.y + b)
  return temp
}
Vector.prototype.minus = function (a, b) {
  let temp = new Vector(this.x - a, this.y - b)
  return temp
}
var firstVec = new Vector(10, 3)
console.log(firstVec)
console.log(firstVec.plus(2, 5))
console.log(firstVec.minus(2, 5))
console.log(new Vector(1, 2).plusV(new Vector(2, 3)))
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minusV(new Vector(2, 3)))
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length)

/*
//BOOK CODE
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
*/
