function truncate(str, maxlength) {
  // ваш код...
  let strNew = '';

  if (str.length > maxlength) {
    for (let i = 0; i < maxlength - 1; i++) {
      strNew += str[i];
    }
    return strNew += '…';
  } else {
    return str;
  }
}
