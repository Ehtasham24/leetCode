const longestConsecutive = function (nums) {
  let count = 0;

  newArr = nums.sort((a, b) => a - b);
  console.log(newArr);
  if (newArr.length === 1) {
    return 1;
  }
  if (newArr.length === 0) {
    return 0;
  }
  let val = newArr[0];
  let currentStreak = 1;
  let longestStreak = 1;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === val) {
      if (newArr[i + 1] === val++) {
        currentStreak++;
        longestStreak += currentStreak;
      } else val = newArr + 2;
    } else currentStreak = 1;
    val = newArr[i + 1];
  }
  return longestStreak;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// let count = 0;
// console.log(nums);
// newArr = nums.sort((a, b) => a - b);
// console.log(newArr);
// if (newArr.length === 1) {
//   return 1;
// }
// if (newArr === 0) {
//   return 0;
// }
// let val = newArr[0];
// console.log("val-->", val);
// for (let i = 0; i < newArr.length; i++) {
//   console.log(`newArr value with each iteration==>${newArr[i]}`);
//   console.log(`newArr ${newArr[i]}===? val ${val}`);
//   if (newArr[i] === val) {
//     console.log(i, "if block invoked");
//     console.log(`newarr==> ${newArr[i]} && val==> ${val}`);
//     val++;
//     count++;
//     console.log(`val after increment==> ${val}`);
//     console.log(`count after increment==> ${count}`);
//   } else val = newArr[i + 1];
//   console.log(i, "val==>", val);
// }
// return count;
