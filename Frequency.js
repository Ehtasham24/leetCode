let freq = {};
const topKfrequent = (nums, k) => {
  const newarr = new Map();
  console.log(nums);
  // if (nums.length == 1 && k == 1) {
  //   return nums;
  // }
  for (let i = 0; i < nums.length; i++) {
    if (!newarr.has(nums[i])) {
      newarr.set(nums[i], 1);
    } else newarr.set(nums[i], newarr.get(nums[i] || 0) + 1);
  }
  console.log(newarr);
  const sorted = new Map([...newarr.entries()].sort((a, b) => b[1] - a[1]));
  console.log(sorted);
  console.log(newarr.get(1));
  const keys = [];
  sorted.forEach((value, index) => {
    keys.push(index);
  });
  console.log(keys);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(keys[i]);
  }
  return result;
};
console.log(topKfrequent([1], 1));
// console.log(topKfrequent([1], 1));
