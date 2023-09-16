function unicodeToString(unicodeValues) {
    return String.fromCharCode(...unicodeValues);
  }
  
  const sampleUnicodeArray = [72, 101, 108, 108, 111];
  const resultString = unicodeToString(sampleUnicodeArray);
  console.log(resultString);
  