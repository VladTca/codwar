function getCard() {
  const card = [];

  // Generate 5 random unique numbers for column B (1-15)
  const bNumbers = getRandomNumbers(1, 15, 5);
  card.push(...bNumbers.map((num) => `B${num}`));

  // Generate 5 random unique numbers for column I (16-30)
  const iNumbers = getRandomNumbers(16, 30, 5);
  card.push(...iNumbers.map((num) => `I${num}`));

  // Generate 4 random unique numbers for column N (31-45)
  const nNumbers = getRandomNumbers(31, 45, 4);
  card.push(...nNumbers.map((num) => `N${num}`));

  // Generate 5 random unique numbers for column G (46-60)
  const gNumbers = getRandomNumbers(46, 60, 5);
  card.push(...gNumbers.map((num) => `G${num}`));

  // Generate 5 random unique numbers for column O (61-75)
  const oNumbers = getRandomNumbers(61, 75, 5);
  card.push(...oNumbers.map((num) => `O${num}`));

  return card;
}

function getRandomNumbers(min, max, count) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

console.log(getCard());
