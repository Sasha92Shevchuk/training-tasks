// function createPhoneNumber(numbers) {
//   let firstPart = [];
//   let secondPart = [];
//   let lastPart = [];
//   firstPart.push("(");
//   for (let index = 0; index < numbers.length; index++) {
//     if (index <= 2) {
//       firstPart.push(numbers[index]);
//     } else if (index > 2 && index < 6) {
//       secondPart.push(numbers[index]);
//     } else {
//       lastPart.push(numbers[index]);
//     }
//   }
//   firstPart.push(")");
//   return firstPart.concat(" ", secondPart.concat("-", lastPart)).join("");
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
//===============>
//Write an algorithm that takes an array and
// moves all of the zeros to the end, preserving the order of the other elements.
// function moveZeros(arr) {
//   const zeroArr = [];
//   const newArr = [];
//   arr.forEach((element) => {
//     element === 0 ? zeroArr.push(element) : newArr.push(element);
//   });
//   return newArr.concat(zeroArr);
// }
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
// }
// const testString = "This is an example!";
// console.log(reverseWords(testString));
// function smash(words) {
//    return words.join(" ");
//
// }
// const arr = ["hello", "world", "this", "is", "great"];
// console.log(smash(arr));
// function makeNegative(num) {
//   return num < 0 ? num : num - num * 2;
// }
// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));
// function noSpace(x) {
//   return x.split(" ").join("");
//   //=====
//   // return x.replace(/\s/gi, "");
// }
// const str = "8 j 8   mBliB8g  imjB8B8  jl  B";
// console.log(noSpace(str));

// function XO(str) {
//   const arr = str.toLowerCase().split("");
//   let countX = [];
//   let countO = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element === "x") {
//       countX.push(element);
//     } else if (element === "o") {
//       countO.push(element);
//     }
//   }

//   return countX.length === countO.length ? true : false;
// }

// const str1 = "ooxx";
// const str2 = "xooxx";
// const str3 = "ooxXm";
// const str4 = "zpzpzpp";
// const str5 = "zzoo";
// console.log(XO(str1));
// console.log(XO(str2));
// console.log(XO(str3));
// console.log(XO(str4));
// console.log(XO(str5));

// function getMiddle(s) {
//   let res;
//   const str = s.length % 2 === 0;
//   const midIndex = Number((s.length / 2 - 1).toFixed());
//   if (midIndex === -1) {
//     return s;
//   } else if (str) {
//     res = s[midIndex] + s[midIndex + 1];
//   } else {
//     res = s[midIndex];
//   }
//   return res;
// }

// const str1 = "test";
// const str2 = "testing";
// const str3 = "middle";
// const str4 = "A";
// console.log(getMiddle(str1));
// console.log(getMiddle(str2));
// console.log(getMiddle(str3));
// console.log(getMiddle(str4));

// function transform(input) {
//   const res = input.split("").map((item) => {
//     if (item === item.toUpperCase() && item !== item.toLowerCase()) {
//       return item + "+";
//     }
//     return item;
//   });
//   return res.join("");
// }

// const str = "DunYweMY48";
// console.log(transform(str));

// function decompose(number) {
//   const digits = number.toString().split("");
//   const formattedDigits = digits.map((digit, index) => {
//     const zeros = "0".repeat(digits.length - index - 1);
//     return digit + zeros;
//   });
//   return formattedDigits.join(" + ");
// }

// const num = 5681;
// console.log(decompose(num));

// function solution(str, ending) {
//   return str.endsWith(ending);
//   // const endingArrLength = ending.split("").length;
//   // if (endingArrLength === 0) {
//   //   return true;
//   // }

//   // const newArr = str.split("").slice(-endingArrLength).join("");

//   // return newArr === ending ? true : false;
// }

// console.log(solution("aaabc", "bc"));
// console.log(solution("abc", "d"));
// console.log(solution("abc", ""));

// function sumStrings(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }

// console.log(sumStrings("1", "2")); //=>3
// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// ); //=>7.125774134884027e+26

// function isMerge(s, part1, part2) {
//   if (s === "") {
//     return part1 === "" && part2 === "";
//   }

//   if (part1[0] === s[0] && isMerge(s.slice(1), part1.slice(1), part2)) {
//     return true;
//   }

//   if (part2[0] === s[0] && isMerge(s.slice(1), part1, part2.slice(1))) {
//     return true;
//   }

//   return false;
// }

// const s = "codewars";
// const part1 = "cdwl";
// const part2 = "oears";
// // const s = "xcyc";
// // const part1 = "xc";
// // const part2 = "yc";
// console.log(isMerge(s, part1, part2));

// function persistence(num) {
//   let count = 0;
//   return helper(num, count);
// }

// function helper(num, count) {
//   if (num < 10) {
//     return count;
//   }
//   count++;

//   let arr = Array.from(num.toString(), Number);

//   const sum = arr.reduce((acc, item) => acc * item);

//   if (sum.toString().length === 1) {
//     return count;
//   }
//   return helper(sum, count);
// }

// // console.log(persistence(39));
// // console.log(persistence(999));
// // console.log(persistence(4));
// console.log(persistence(25));

// function isIsogram(str) {
//   const myset = new Set(str.toLowerCase().split(""));
//   return [...myset].length === str.toLowerCase().split("").length;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isogram"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const leftSum = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
//     const rightSum = arr.slice(i + 1).reduce((acc, val) => acc + val, 0);

//     if (leftSum === rightSum) {
//       return i;
//     }
//   }

//   return -1;
// }
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));

// function duplicateCount(text) {
//   const arrFromText = text.toLowerCase().split("");

//   const uniqueChars = [...new Set(arrFromText)];
//   let countDuplicate = 0;

//   uniqueChars.forEach((char) => {
//     const charCount = arrFromText.filter((item) => item === char).length;
//     console.log("uniqueChars.forEach ~ charCount:", charCount);
//     if (charCount > 1) {
//       countDuplicate++;
//     }
//   });

//   return countDuplicate;
// }

// console.log(duplicateCount("abcde"));
//console.log(duplicateCount("aabbcde"));
// console.log(duplicateCount("aabBcde"));
// console.log(duplicateCount("indivisibility"));

// const uniqueInOrder = (iterable) => {
//   const arr = typeof iterable === "string" ? iterable.split("") : iterable;
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// console.log(uniqueInOrder("ABBCcAD"));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// function validatePIN(pin) {
//   const reg = /^(?:\d{4}|\d{6})$/;

//   return reg.test(pin);
// }

// console.log(validatePIN(".123"));
// console.log(validatePIN("1234"));
// console.log(validatePIN("a234"));
// console.log(validatePIN("-1234"));
// console.log(validatePIN("1.234"));

// function friend(friends) {
//   return friends.filter((item) => {
//     return item.length === 4;
//   });
// }

// console.log(friend(["Ryan", "Kieran", "Mark"])); //=>["Ryan", "Mark"]

// function positiveSum(arr) {
//   //   if (arr.length === 0) {
//   //     return 0;
//   //   }
//   //     return arr.filter((item) => item > 0).reduce((acc, prev) => acc + prev, 0);
//   return arr.length !== 0
//     ? arr.filter((item) => item > 0).reduce((acc, prev) => acc + prev, 0)
//     : 0;
// }

// console.log(positiveSum([-1, -4, -7, -12])); // =>1 + 7 + 12 = 20
// console.log(positiveSum([])); //  = 0
// console.log(positiveSum([4, 5, -8])); //  = 9

// function narcissistic(value) {
//   const arr = value.toString().split("");

//   const res = arr
//     .map((item) => Number(item) ** arr.length)
//     .reduce((acc, prev) => acc + prev, 0);

//   //   return Number(arr.reduce((acc, prev) => acc + prev)) === res;
//   return value === res;
// }

// console.log(narcissistic(153)); // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// function findOutlier(integers) {
//   const arrOdd = [];
//   let even;
//   integers.forEach((element) => {
//     if (element % 2 === 0) {
//       arrOdd.push(element);
//     } else {
//       even = element;
//     }
//   });

//   return arrOdd.length === 1 ? arrOdd[0] : even;
//   //   const evens = integers.filter((num) => num % 2 === 0);
//   //   const odds = integers.filter((num) => num % 2 !== 0);

//   //   return evens.length === 1 ? evens[0] : odds[0];
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //=> 11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //=> 160
// console.log(findOutlier([2, 6, 8, 10, 3])); //=> 3
// console.log(findOutlier([1, 1, 0, 1, 1])); //=> 0
// console.log(findOutlier([0, 1, 2])); //=> 1

// const tower = [];
// function towerBuilder(nFloors) {
//   // if (nFloors === 0) {
//   //   return tower;
//   // }
//   // const lastString =
//   //   " ".repeat(tower.length) +
//   //   "*".repeat(nFloors + nFloors - 1 || 1) +
//   //   " ".repeat(tower.length);
//   // tower.unshift(lastString);

//   // towerBuilder(nFloors - 1);
//   // return tower;
//   // good design
//   const tower = [];

//   for (let i = 0; i < nFloors; i++) {
//     const spaces = " ".repeat(nFloors - i - 1);
//     const stars = "*".repeat(i * 2 + 1);
//     const level = spaces + stars + spaces;
//     tower.push(level);
//   }

//   return tower;
// }

// // console.log(towerBuilder(1)); //=>["*"]
// // console.log(towerBuilder(2)); // =>  [" * ","***"]
// console.log(towerBuilder(3)); // => ["  *  "," *** ","*****"]

// function digitalRoot(n) {
//   if (n < 10) {
//     return n;
//   }
//   const numb = n
//     .toString()
//     .split("")
//     .reduce((acc, num) => acc + Number(num), 0);
//   return digitalRoot(numb);
// }

// console.log(digitalRoot(16)); // -->  1 + 6 = 7
// console.log(digitalRoot(942)); // -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(digitalRoot(132189)); // -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// console.log(digitalRoot(493193)); //  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function descendingOrder(n) {
//   const strArr = n.toFixed().split("");
//   const arrNumb = strArr.map((item) => Number(item));
//   return Number(arrNumb.sort((a, b) => b - a).join(""));
// }

// console.log(descendingOrder(0)); // => 0
// console.log(descendingOrder(1)); // => 1
// console.log(descendingOrder(111)); // => 111
// console.log(descendingOrder(15)); // => 51
// console.log(descendingOrder(1021)); // => 2110

// const reverseSeq = (n) => {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr.reverse();
// };

// console.log(reverseSeq(5));

// const min = function (list) {
//   let min = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (min > list[i]) {
//       min = list[i];
//     }
//   }
//   return min;
// };

// const max = function (list) {
//   let max = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (max < list[i]) {
//       max = list[i];
//     }
//   }
//   return max;
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// function squareDigits(num) {
//   const arr = num
//     .toFixed()
//     .split("")
//     .map((item) => Number(item));

//   return Number(arr.map((item) => item ** 2).join(""));
// }

// console.log(squareDigits(3212)); //=> 9414
// console.log(squareDigits(2112)); //=> 4114
// console.log(squareDigits(9119)); //=> 811181

// function trim(str, size) {
//   if (size >= str.length) {
//     return str;
//   }
//   const newStr = str.slice(0, size).split("");

//   if (newStr.length <= 3) {
//     newStr.splice(newStr.length, 0, "...");
//     return newStr.join("");
//   }
//   newStr.splice(size - 3, 3, "...");

//   return newStr.join("");
// }

// console.log(trim("GBbSf IGuAx", 3));

// function rowWeights(array) {
//   const evenArr = [];
//   const oddArr = [];
//   array.forEach((element, index) => {
//     if (index % 2 === 0) {
//       evenArr.push(element);
//     } else {
//       oddArr.push(element);
//     }
//   });
//   const evenRes = evenArr.reduce((acc, prev) => acc + prev, 0);
//   const oddRes = oddArr.reduce((acc, prev) => acc + prev, 0);
//   return [evenRes, oddRes];
// }

// console.log(rowWeights([13, 27, 49])); // =>(62, 27)
// console.log(rowWeights([50, 60, 70, 80])); // =>(120, 140)

// function createPhoneNumber(numbers) {
//   const str = numbers.join("");

//   //     return `(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]}-${str[6]}${str[7]}${str[8]}${str[9]}`;

//   return str.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => "(123) 456-7890"
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // => "(111) 111-1111"
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => "(123) 456-7890"

// function findLargest(numbers) {
//   // Your code goes here
//   let res = null;
//   numbers.forEach((element, index) => {
//     console.log(element, "index", index);
//     if (element > element + 1) {
//       res = element;
//     }
//   });
//   return res;
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//   }
// }

// console.log(findLargest([7, 17, 13, 19, 5])); // 19

// function computeClosestToZero(ts) {
//   // Write your code here
//   // To debug: console.error('Debug messages...');
//   if (ts.length === 0) {
//     return 0;
//   }
//   let closest = ts[0];
//   for (let index = 0; index < ts.length; index += 1) {
//     const element = ts[index];
//     if (
//       Math.abs(element) < Math.abs(closest) ||
//       (Math.abs(element) === Math.abs(closest) && element > 0)
//     ) {
//       closest = element;
//     }
//   }
//   return closest;
// }

// console.log(computeClosestToZero([1, 15, -6, 25, -4, -13, 1, -3]));

// function areYouPlayingBanjo(name) {
//   return name.toLowerCase()[0] === "r"
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));

// function sum(num) {
//   return num === 0 ? num : sum(num - 1) + num;
//   if (num === 0) {
//     return num;
//   }
//   return sum(num - 1) + num;
// }

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(8));

// function high(x) {
//   const arr = x.split(/\s+/);
//   let maxNumEl = 0;
//   let res = "";
//   arr.forEach((el) => {
//     const numeratedEl = [...el].reduce(
//       (acc, element) => acc + element.toLowerCase().charCodeAt(0) - 96,
//       0
//     );
//     console.log(el);
//     console.log(numeratedEl);
//     if (numeratedEl > maxNumEl) {
//       maxNumEl = numeratedEl;
//       res = el;
//     }
//   });

//   return res;
// }

// console.log(high("man i need a taxi up to ubud")); // 'taxi'
// console.log(high("what time are we climbing up the volcano")); // 'volcano'
// console.log(high("aaa b")); // 'aaa'
// console.log(high("b aa")); // 'b'

// function duplicateCount(text) {
//   const lowerText = text.toLowerCase();
//   let count = 0;
//   const arrSet = new Set(lowerText);
//   arrSet.forEach((element) => {
//     let dublCount = 0;
//     lowerText.split("").forEach((el) => {
//       if (element === el) {
//         dublCount += 1;
//       }
//     });
//     if (dublCount >= 2) {
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(duplicateCount("aabBcde"));

// function alphabetPosition(text) {
//   const arrOfLetters = text.toLowerCase().match(/[a-zA-Z]+/gi);

//   return !arrOfLetters
//     ? ""
//     : arrOfLetters
//         .join("")
//         .split("")
//         .map((item) => item.charCodeAt() - 96)
//         .join(" ");
// }
// console.log(alphabetPosition("4<.,?1%!"));

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// ("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")

// function highAndLow(numbers) {
//   const arr = numbers.split(" ");

//   return `${Math.max(...arr)} ${Math.min(...arr)}`;
// }
// console.log(highAndLow("1 2 3")); // "3 1"

function findOdd(a) {
  return a.reduce((a, b) => a ^ b);
}
// console.log(findOdd([1, 1, 2])); //=>2

function longest(s1, s2) {
  const arr = [...new Set([...s1, ...s2])];
  return arr.sort((a, b) => a - b).join("");
}

// console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"

function likes(names) {
  if (names.length < 1) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
  }
}

// console.log(likes([])); //, "no one likes this"
// console.log(likes(["Peter"])); // 'Peter likes this'
// console.log(likes(["Jacob", "Alex"])); //, 'Jacob and Alex like this'
// console.log(likes(["Max", "John", "Mark"])); //, 'Max, John and Mark like this'
// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //, 'Alex, Jacob and 2 others like this'

function order(words) {
  const arr = words.split(" ");
  console.log("order ~ arr:", arr);
  // const arrOfAllNumbers = arr.map((item) => {
  //   console.log("arrOfAllNumbers ~ item:", item);
  //   const digits = item.match(/\d+/g);
  //   console.log("arrOfAllNumbers ~ digits:", digits.join(""));
  //   return digits ? digits.join("") : "";
  // });
  // console.log("order ~ arrOfAll:", arrOfAllNumbers);
  const arrWithNumbers = arr.map((item) => {
    const digits = item.match(/\d+/g);
    console.log("arrWithNumbers ~ digits:", digits);
    return {
      word: item,
      number: digits ? parseInt(digits[0], 10) : 0,
    };
  });
  console.log("arrWithNumbers", arrWithNumbers);
  // Сортуємо масив об'єктів за числовим значенням
  arrWithNumbers.sort((a, b) => a.number - b.number);

  // Повертаємо відсортовані слова як рядок
  return arrWithNumbers.map((item) => item.word).join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); //, "Thi1s is2 3a T4est"
