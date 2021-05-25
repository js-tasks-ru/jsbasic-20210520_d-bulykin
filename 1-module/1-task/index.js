function factorial(n) {
  // ваш код...

  let res = 1;

  while (n) {
    res *= n--;
  }

  return res;
}
