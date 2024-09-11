var isPalindrome = function (s) {
  let actual = s.toLowerCase();
  console.log(actual);
  val = Array.from(actual).reverse().join("");
  const arr = val.replace(/[^a-zA-Z0-9]+/g, "");
  const arr1 = actual.replace(/[^a-zA-Z0-9]+/g, "");
  //   console.log(`type of arr==>${typeof arr}, type of arr1 ${typeof arr1}`);
  console.log(`reversed string==> ${arr}, args string==>${arr1} `);
  if (arr === arr1) {
    return `string is a palindrome`;
  }
  return `not a palindrome`;
};

console.log(isPalindrome("race a car"));
