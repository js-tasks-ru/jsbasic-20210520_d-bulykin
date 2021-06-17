function sumSalary(salaries) {
  // ваш код...
  let sum = 0;

  for (let key in salaries) {
    if (!isNaN(salaries[key]) && salaries[key] != (Infinity) && salaries[key] != (-Infinity) && typeof salaries[key] === 'number') {
      sum += salaries[key];
    } else {
      sum += 0;
    }
  }
  return sum;
}