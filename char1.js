function stringToUnicode(inputString) {
    const unicodeArray = [];
    for (let i = 0; i < inputString.length; i++) {
      unicodeArray.push(inputString.charCodeAt(i));
    }
    return unicodeArray;
  }
  
  const sampleString = "Hello";
  const resultUnicodeArray = stringToUnicode(sampleString);
  console.log(resultUnicodeArray);
  