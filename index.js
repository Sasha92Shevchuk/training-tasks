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

function findOutlier(integers) {
  const arrOdd = [];
  let even;
  integers.forEach((element) => {
    if (element % 2 === 0) {
      arrOdd.push(element);
    } else {
      even = element;
    }
  });

  return arrOdd.length === 1 ? Number(arrOdd) : even;

  //   if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
  //     console.log("масив парних чисел");
  //     return integers.find((item) => item % 2 !== 0);
  //   } else {
  //     console.log(" масив не парних чисел");
  //     return integers.find((item) => item % 2 === 0);
  //   }
  //   console.log(integers.find((item) => item % 2 !== 0)); // - знайти не парне число
  //   console.log(integers.find((item) => item % 2 === 0)); // - знайти парне число
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //=> 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //=> 160
console.log(findOutlier([2, 6, 8, 10, 3])); //=> 3
console.log(findOutlier([1, 1, 0, 1, 1])); //=> 0
console.log(findOutlier([0, 1, 2])); //=> 1
