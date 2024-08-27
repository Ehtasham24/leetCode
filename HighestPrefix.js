const prefix = (strs) => {
  console.log(typeof strs[0]);
  //   console.log(strs[0][0]);

  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i][i]);
  }
};

prefix(["flower", "flow", "flight"]);
