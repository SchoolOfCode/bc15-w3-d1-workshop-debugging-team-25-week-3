function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numberAsString = number.toString();

  for (let i = 0; i < numberAsString.length; i++) {
    const digit = numberAsString[i];
    if ('9' == digit) {
      count++;
    }
  }
  return count;
}