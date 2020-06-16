// write function do doCalculation
Array.prototype.doCalculation = function (callback) {
  console.log("inputs", callback, this);
  let newArr = [];
  this.forEach((i) => {
    newArr.push(callback(i));
  });
  return newArr;
};

var myArr = [1, 2, 3].doCalculation(function (e) {
  console.log("e", e);
  return e * e;
});
console.log(myArr);

var myArr = [1, 2, 3].doCalculation(function (e) {
  console.log("e", e);
  return e + e;
});
console.log(myArr);
