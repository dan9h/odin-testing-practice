function analyzeArray(arrayOfNumbers) {
  const obj = {
    length: arrayOfNumbers.length,
    average:
      arrayOfNumbers.reduce((acc, cur) => acc + cur, 0) / arrayOfNumbers.length,
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
  };

  return obj;
}

export default analyzeArray;
