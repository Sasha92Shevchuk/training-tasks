function createPhoneNumber(numbers) {
  let firstPart = [];
  let secondPart = [];
  let lastPart = [];
  firstPart.push("(");
  for (let index = 0; index < numbers.length; index++) {
    if (index <= 2) {
      firstPart.push(numbers[index]);
    } else if (index > 2 && index < 6) {
      secondPart.push(numbers[index]);
    } else {
      lastPart.push(numbers[index]);
    }
  }
  firstPart.push(")");

  return firstPart.concat(" ", secondPart.concat("-", lastPart)).join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
