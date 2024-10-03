// question1
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input must be an array');
      } else {
        const filteredACase = mixedArray
          .filter((item) => typeof item === 'string')
          .map((item) => item.toLowerCase());
        resolve(filteredACase);
      }
    });
  };
  

  const input = ['Pizza', 10, true, 25, false,  'Wings'];
  lowerCaseWords(input)
    .then((result) => console.log(result))  
    .catch((error) => console.error(error));
  