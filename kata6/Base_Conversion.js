function convert(input, source, target) {
  console.log(input, source, target);
  // Определяем основание систем счисления
  const baseSource = source.length;
  console.log(baseSource);
  const baseTarget = target.length;
  console.log(baseTarget);

  // Функция для преобразования символа в значение по его индексу в алфавите
  function charToValue(char, alphabet) {
    console.log(alphabet.indexOf(char), char);
    return alphabet.indexOf(char);
  }

  // Функция для преобразования значения в символ по его индексу в алфавите
  function valueToChar(value, alphabet) {
    console.log(alphabet[value], value);
    return alphabet[value];
  }

  // Преобразование из исходной системы в десятичное число
  let decimalValue = 0;
  for (let char of input) {
    decimalValue = decimalValue * baseSource + charToValue(char, source);
    console.log(decimalValue);
  }

  // Преобразование из десятичного числа в целевую систему
  if (decimalValue === 0) {
    return target[0]; // Специальный случай для "0"
  }

  let result = "";
  while (decimalValue > 0) {
    console.log(decimalValue);
    result = valueToChar(decimalValue % baseTarget, target) + result;
    console.log(result);
    decimalValue = Math.floor(decimalValue / baseTarget);
    console.log(decimalValue);
  }

  return result;
}

// Пример использования
const Alphabet = {
  BINARY: "01",
  OCTAL: "01234567",
  DECIMAL: "0123456789",
  HEXA_DECIMAL: "0123456789abcdef",
  ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
  ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA_NUMERIC:
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

// console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY)); // "1111"
// console.log(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL)); // "17"
// console.log(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)); // "10"
// console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL)); // "a"
// console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)); // "a"
// console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER)); // "bb"
// console.log(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)); // "320048"
console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER)); // "SAME"
