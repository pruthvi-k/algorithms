// write function to doCalculation
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

// Write a function that checks for balancedParathesis

// "(())" - true
// "((())" - false
// "())(" - false

function balancedParanthesis(str) {
  let countBanacedParanthesis = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")" && countBanacedParanthesis < 1) {
      return false;
    }
    if (str[i] === "(") countBanacedParanthesis++;
    if (str[i] === ")") countBanacedParanthesis--;
  }
  if (countBanacedParanthesis === 0) return true;

  return false;
}

balancedParanthesis("(())");
balancedParanthesis("((())");
balancedParanthesis("())(");

// 2) Write a function that connects each previous word to the next word by the shared letters.
// Return the resulting string (removing duplicate characters in the overlap) and
// the minimum number of shared letters across all pairs of strings.

// Examples:
// join(["move", "over", "very"]) ➞ ["movery", 3]
// join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]
// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

// join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]

function join(arr) {
  if (!arr || arr.length === 0) return;

  let firstWord = arr[0];
  let uniqueStr = firstWord;
  let commonCharCount = 0;
  for (let i = 1; i < arr.length; i++) {
    let word = arr[i];
    let overlappedStr = "";

    for (let j = 0; j < word.length; j++) {
      overlappedStr = "";
      for (let k = 0; k < firstWord.length; k++) {
        if (firstWord[k] !== word[j]) {
          k++;
        } else {
          overlappedStr += word[k];
          commonCharCount++;
          j++;
        }
      }
      overlappedStr += word[j];
    }
    uniqueStr += overlappedStr;
  }
  console.log(uniqueStr, commonCharCount);
  return [uniqueStr, commonCharCount];
}

join(["move", "over", "very"]); // output [movery,3]

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

  this.getName = function () {
    console.log(`2 ${this.firstName} ${this.lastName} age ${this.age}`);
  };
}

Person.prototype.nationality = "English";

function Employee(first, last, age, eye, empid) {
  Person.call(first, last, age, eye);
  this.empid = empid;
  this.getId = function () {
    console.log(
      `3 ${this.firstName} ${this.lastName} age ${this.age}  empid ${this.empid}`
    );
  };
}

// currying and partial application
function add(x, y, z) {
  return x + y + z;
}
function curryPartial(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

curryPartial(add)(1)(2)(3); //6
curryPartial(add, 1)(2)(3); //6
curryPartial(add, 1)(2, 3); //6
curryPartial(add, 1, 2)(3); //6
curryPartial(add, 1, 2, 3); //6
curryPartial(add)(1, 2, 3); //6
curryPartial(add)(1, 2)(3); //6
curryPartial(add)()(1, 2, 3); //6
curryPartial(add)()(1)()()(2)(3); //6

curryPartial(add)()(1)()()(2)(3, 4, 5, 6); //6
curryPartial(add, 1)(2, 3, 4, 5); //6

curryPartial(curryPartial(curryPartial(add, 1), 2), 3); //6
curryPartial(curryPartial(add, 1, 2), 3); //6
curryPartial(curryPartial(add, 1), 2, 3); //6
curryPartial(curryPartial(add, 1), 2)(3); //6
curryPartial(curryPartial(add, 1)(2), 3); //6
curryPartial(curryPartial(curryPartial(add, 1)), 2, 3); //6
