function countVnLetters(str) {
  const vnLetters = {
    aw: "ă",
    aa: "â",
    dd: "đ",
    ee: "ê",
    oo: "ô",
    ow: "ơ",
    w: "ư",
  };

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let letter in vnLetters) {
      if (str.slice(i).startsWith(letter)) {
        count++;
        i += letter.length - 1;
        break;
      }
    }
  }

  return count;
}

console.log(countVnLetters("hfdawhwhcoomdd"));
