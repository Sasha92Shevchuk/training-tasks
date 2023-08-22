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

function solution(str, ending) {
  return str.endsWith(ending);
  // const endingArrLength = ending.split("").length;
  // if (endingArrLength === 0) {
  //   return true;
  // }

  // const newArr = str.split("").slice(-endingArrLength).join("");

  // return newArr === ending ? true : false;
}

console.log(solution("aaabc", "bc"));
console.log(solution("abc", "d"));
console.log(solution("abc", ""));
