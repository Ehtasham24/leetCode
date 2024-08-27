const anagram = (s, t) => {
  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    return true;
  }
  return false;
};

console.log(anagram("ali", "lia"));
