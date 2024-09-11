const productExceptSelf = (nums) => {
  const finalArray = [];
  // let temp;
  // for (let i = 0; i < nums.length; i++) {
  //   let multiple = 1;
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i === j) {
  //       continue;
  //     }
  //     multiple = multiple * nums[j];
  //     temp = multiple;
  //   }
  //   finalArray.push(temp);
  // }
  // return finalArray;

  let leftSide = 0;
  let rightSide = nums.length - 1;
  let leftProduct = 1;
  for (let i = 0; i < rightSide - 1; i++) {
    console.log(`loop ==> ${nums[i]}`);
    console.log(`${leftProduct}*${nums[i + 1]}`);
    leftProduct = leftProduct * nums[i + 1];
  }

  console.log(leftProduct);
};
//   for (let i = 0; i < nums.length; i++) {
//     console.log(`outer array elements: ${i}`);
//     for (let j = 0; j < nums.length; j++) {
//       if (j === i) {
//         console.log(`if block invoked`);
//         continue;
//       }
//       console.log(`inner array elements: ${j}`);
//     }
//   }

console.log(productExceptSelf([1, 2, 3, 4]));
