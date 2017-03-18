function zeroFill(num, size = 2) {
  const str = num.toString();
  const actualSize = str.length;

  return actualSize >= size ? str : `${'0'.repeat(size - actualSize)}${str}`;
}

export default zeroFill;
