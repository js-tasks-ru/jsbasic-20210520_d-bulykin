function ucFirst(str) {
  // ваш код...

  let str1 = '';

  if (str == '') {
    return str;
  }

  for (let i = 1; i < str.length; i++) {
    str1 += str[i]
  }

  return str[0].toUpperCase() + str1;
}

ucFirst('laalla');