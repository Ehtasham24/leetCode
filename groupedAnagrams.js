let arr = [];
const groupAnagrams = function (strs) {
  const newarr = strs;
  const hashmap = new Map();
  console.log(newarr);
  newarr.forEach((element, index) => {
    console.log(element.split("").sort().join(""), index);
    if (hashmap.has(element.split("").sort().join(""), index)) {
      hashmap.get(element.split("").sort().join("")).push(index);
    } else hashmap.set(element.split("").sort().join(""), [index]);
  });
  // console.log(hashmap.keys(1))
  const finalArray = [];
  console.log(hashmap);
  hashmap.forEach((element, index) => {
    finalArray.push(element);
    // finalArray.push(index);
  });

  console.log(finalArray);
  // const result = finalArray.forEach((value) => {
  //  return value.map((val) => {
  //     return strs[val];
  //   });
  // });
  const result = finalArray.map((value) => {
    return value.map((val) => {
      return strs[val];
    });
  });

  return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
