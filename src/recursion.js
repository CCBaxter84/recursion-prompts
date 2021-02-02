/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
  // Edge case -- handle negative number
  if (n < 0) {
    return null;
  }

  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive call
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  // Edge case -- handle empty array
  if (array.length === 0) {
    return 0;
  }

  // Create copy to avoid mutation of provided array
  let copy = [...array];

  // Base case
  if (copy.length === 1) {
    return copy.pop();
  }

  // Recursive call
  return copy.pop() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
  // Edge case
  if (array.length === 0) {
    return 0;
  }

  // Create copy of array to avoid mutation and last index var
  let copy = [...array];
  let last = copy.length - 1;

  // Base case
  if (copy.length === 1 && typeof copy[last] === 'number') {
    return copy.pop();
  }

  // Recursive call
  if (typeof copy[last] === 'number') {
    return copy.pop() + arraySum(copy);
  } else if (Array.isArray(copy[last])) {
    return arraySum(copy.pop()) + arraySum(copy);
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Base cases
  if (n === 0) {
    return true;
  } else if (n === 1 || n === -1) {
    return false;
  }

  // Recursive calls
  if (n > 1) {
    return isEven(n - 2);
  } else if (n < -1) {
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base case -- if 0 return 0
  if (n === 0) {
    return 0;
  }

  // Recursive calls -- branch for positive and negative integers
  if (n > 0) {
    return n - 1 + sumBelow(n - 1);
  } else if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
  // Base case -- if x is within 1 of y return empty array;
    if (x === y || x + 1 === y || x - 1 === y) {
      return [];
    }
  // Recursive calls -- branch depending on if x is > or < y
  // Concat recursive call to array
    if (x < y) {
      return [x + 1].concat(range(x + 1, y));
    } else if (x > y) {
      return [x - 1].concat(range(x - 1, y));
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Edge case -- handle 0 exponent
  if (exp === 0) {
    return 1;
  }

  // Recursive calls -- branch depending on positive or neg exponent
  if (exp > 0) {
    return base * exponent(base, exp - 1);
  } else if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base cases
  if (n === 1 || n === 2) {
    return true;
  }
  if (n === 0 || n % 2 !== 0) {
    return false;
  }

  // Recursive call
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = function(string) {
  // Base case
  if (string.length === 0) {
    return '';
  }
  let last = string.length - 1;
  // Recursive case
  return string.slice(last) + reverse(string.slice(0, last));

};

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function(string) {
  // Base cases
  let firstLetter = string[0].toLowerCase();
  let lastLetter = string[string.length - 1].toLowerCase();
  let length = string.length;
  if (length === 2 && firstLetter === lastLetter || length === 1) {
    return true;
  }
  if (firstLetter !== lastLetter) {
    return false;
  }

  // Recursive call
  return palindrome(string.slice(1, string.length - 1));
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  let xAbs = x < 0 ? x - x - x : x;
  let yAbs = y < 0 ? y - y - y : y;
  if (xAbs < y || xAbs < yAbs) {
    return x;
  }
  if (x === 0 && y === 0) {
    return NaN;
  }
  if (x === y) {
    return 0;
  }

  if (x > 0 && y > 0 || x < 0 && y < 0) {
    return modulo(x - y, y);
  } else if (x < 0 && y > 0 || x > 0 && y < 0) {
    return modulo(x + y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if (y === 1) {
    return x;
  } else if (y === -1) {
    return -x;
  }

  if (y > 1) {
    return x + (multiply(x, y - 1));
  } else if (y < -1) {
    return -x + (multiply(x, y + 1));
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  let xAbs = x < 0 ? x - x - x : x;
  let yAbs = y < 0 ? y - y - y : y;

  if (x === y && x > 0) {
    return 1;
  } else if (x === y && x < 0) {
    return -1;
  } else if (xAbs < yAbs) {
    return 0;
  }

  if (x > 0 && y > 0) {
    return 1 + ( divide(x - y, y) );
  } else if (x < 0 && y < 0) {
    return 1 + ( divide(-x + y, -y) );
  } else if (x < 0 && y > 0 || x > 0 && y < 0) {
    return -1 + ( divide(x + y, y) );
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  // Edge case -- negative numbers
  if (x < 0 || y < 0) {
    return null;
  }
  // Edge case -- equal numbers
  if (x === y) {
    return x;
  }
  // Branch based on which number is greater
  if (x < y) {
    // Base case
    if (x === 0) {
      return y;
    }
    // Recursive call
    return gcd(x, y % x);
  } else if (x > y) {
    // Base case
    if (y === 0) {
      return x;
    }
    // Recursive call
    return gcd(x % y, y);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Edge case -- strings are empty
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  // Base case
  if (str1[0] !== str2[0]) {
    return false;
  } else if (str1.length === 1 && str2.length === 1 && str1[0] === str2[0]) {
    return true;
  }

  // Recursive call
  return compareStr(str1.slice(1), str2.slice(1));
};
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // Base case -- return empty array if string length is 0
  if (str.length === 0) {
    return [];
  }

  // Recursive case -- return first char + recursive call on slice of str
  let first = str[0];
  let slice = str.slice(1);
  return [first].concat( createArray(slice) );
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // Base case -- if array is empty return empty array
  if (array.length === 0) {
    return [];
  }

  // Recursive case -- return last char + recursive call on array
  return [array.pop()].concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // Base case
  if (length === 0) {
    return [];
  }
  // Recursive case
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // Base case
  if (n === 0) {
    return [];
  }
  // Recursive case
  if (n % 5 === 0 && n % 3 === 0) {
    return fizzBuzz(n - 1).concat('FizzBuzz');
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat('Buzz');
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat('Fizz');
  } else {
    return fizzBuzz(n - 1).concat(n.toString());
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  console.log(array);
  // Base case
  if (array.length === 1) {
    if (array[0] === value) {
      return 1;
    } else {
      return 0;
    }
  }

  // Recursive case
  return countOccurrence([array.pop()], value) + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base case
  if (array.length === 1) {
    let item = array[0];
    return [callback(item)];
  }

  // Recursive case
  let first = [array[0]];
  let slice = array.slice(1);
  return rMap(first, callback).concat(rMap(slice, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // Base case -- value is not an object
  let values = Object.values(obj);
  if (values.every(value => typeof value !== 'object')) {
    if (obj[key]) {
      return 1;
    } else {
      return 0;
    }
  }

  // Iterate over each k/v pair and use recursive call to drill down into v if it is a nested object
  // Increment count upon identifying matching keys
  let count = 0;
  for (let k in obj) {
    let val = obj[k];
    if (k === key) {
      count++
    }
    if (typeof val === 'object') {
      count += countKeysInObj(val, key);
    }
  }
  return count;
};
var obj = {
  'e': {'x':'y'},
  't': {
    'r': { 'e':'r' },
    'p': { 'y':'r' }
  },
  'y':'e'
};
// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  // Base case -- value is not an object
  let values = Object.values(obj);
  if (values.every(val => typeof val !== 'object')) {
    let count = 0;
    values.forEach(val => {
      if (val === value) {
        count++;
      }
    });
    return count;
  }

  // Recursive case
  let count = 0;
  for (let key in obj) {
    let val = obj[key];
    if (val === value) {
      count ++;
    }
    if (typeof val === 'object') {
      count += countValuesInObj(val, value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  // Helper function
  const swap = function(obj, oldK, newK) {
    if (obj[oldK]) {
      obj[newK] = obj[oldK];
      delete obj[oldK];
    }
    return;
  };

  // Base case -- ensure no more nested objects
  let values = Object.values(obj);
  if ( values.every(val => typeof val !== 'object') ) {
    swap(obj, oldKey, newKey);
  }

  // Recursive case -- iterate over k/v pairs and use recursion to drill down into nested objects
  for (let key in obj) {
    swap(obj, oldKey, newKey);
    let value = obj[key];
    if (typeof value === 'object') {
      replaceKeysInObj(value, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  // Edge case n is 0 or negative
  if (n <= 0) {
    return null;
  }

  // Base case
  if (n === 1) {
    return [0, 1];
  }
  // Recursive case
  let result = fibonacci(n - 1);
  let prev1 = result[result.length - 1];
  let prev2 = result[result.length - 2];
  let next = prev1 + prev2;
  return result.concat(next);
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // Edge case -- 0 or negative n
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  // Base case -- n equals 1
  if (n === 1) {
    return 1;
  }

  // Recursive case
  return nthFibo(n - 1) + nthFibo(n - 2);
};


// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  // Base case -- if array is empty
  if (array.length === 0) {
    return [];
  }

  // Recursive case
  let first = array[0].toUpperCase();
  let rest = array.slice(1);
  return [first].concat(capitalizeWords(rest));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  // Base case
  if (array.length === 0) {
    return [];
  }

  // Recursive case
  let first = array[0];
  first = first[0].toUpperCase() + first.slice(1);
  let rest = array.slice(1);
  return [first].concat( capitalizeFirst(rest) );
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  // Base case -- values don't contain any objects
  let values = Object.values(obj);
  if (values.every(value => typeof value !== 'object')) {
    let sum = 0;
    // Iterate over each k/v pair and increment sum
    for (let key in obj) {
      let val = obj[key];
      if (val % 2 === 0) {
        sum += val;
      }
    }
    return sum;
  }

  // Recursive case -- values contain objects
  let sum = 0;
  // Iterate over each k/v pair
  for (let key in obj) {
    let val = obj[key];
    // Increment val if it is even
    // Recursively call fn on val if it is an object
    if (typeof val === 'number' && val % 2 === 0) {
      sum += val;
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      sum += nestedEvenSum(val);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  // Base case -- array is empty
  if (array.length === 0) {
    return [];
  }

  // Recursive case
  // Remove first value from array
  let first = array.shift();
  // If first is a number, concat it to recursive call on rest of array
  // If first is an array, concat result of recursive call on first to result of recursive call on rest of array
  if (typeof first === 'number') {
    return [first].concat( flatten(array) );
  } else if (Array.isArray(first)) {
    return flatten(first).concat( flatten(array) );
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  // Base case
    if (str.length === 1) {
      let letter = str[0];
      if (!obj || !obj[letter]) {
        obj[letter] = 0;
      }
      obj[letter]++;
      return obj;
    }

  // Recursive case
  letterTally(str[0], obj);
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  // Base case
  if (list.length <= 1) {
    return list;
  }

  // Recursive case
  let result = list[0];
  let rest = list.slice(1);
  while (result === rest[0]) {
    rest.shift();
  }
  return [result].concat(compress(rest));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // Base case
  if (array.length === 1) {
    array[0].push(aug);
    return array;
  }

  // Recursive case
  let first = augmentElements([array.shift()], aug);;
  let rest = augmentElements(array, aug);
  return first.concat(rest);
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // Base case
  if (array.length === 0) {
    return [];
  }

  // Recursive case
  let first = array[0];
  let rest = array.slice(1);
  while (first === 0 && rest[0] === 0) {
    rest = rest.slice(1);
  }
  return [first].concat(minimizeZeroes(rest));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // Base case
  if (array.length === 0) {
    return [];
  }

  // Recursive case
  let isLen1 = array.length === 1;
  let first = Math.abs(array[0]);
  let second = isLen1 ? null : Math.abs(array[1]);
  let rest = array.slice(2);
  let front;
  if (second !== null) {
    second = '-' + second.toString();
    second = parseInt(second);
    front = [first, second];
  } else {
    front = [first];
  }
  return front.concat( alternateSign(rest) );
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // Object for look ups
  const nums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  }

  // Base case
  if (str.length === 0) {
    return '';
  }

  // Recursive case
  let coercedNum = parseInt(str[0]);
  let isValidNum = Number.isInteger(coercedNum) && coercedNum < 10 && coercedNum >= 0;
  let first = isValidNum ? nums[coercedNum] : str[0];
  let rest = str.slice(1);
  return first.concat( numToText(rest) );
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
