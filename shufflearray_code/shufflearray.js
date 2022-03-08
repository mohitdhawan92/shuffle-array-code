function shuffleArray(array) {
  const newArray = array.map(() => null);
  const arrayReference = array.map((item, index) => index);

  array.forEach(randomize);

  return newArray;

  function randomize(item) {
    const randomIndex = getRandomIndex();

    newArray[arrayReference[randomIndex]] = item;

    arrayReference.splice(randomIndex, 1);
  }

  function getRandomIndex() {
    const min = 0;
    const max = arrayReference.length;
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
