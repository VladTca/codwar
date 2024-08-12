function whoseBicycle(diary1, diary2, diary3) {
  const ageTable = {
    firstSonAge: 14,
    secondSonAge: 9,
    thirdSonAge: 8,
  };

  // Функция для вычисления суммы оценок в дневнике
  const sumMarks = (diary) =>
    Object.values(diary).reduce((sum, mark) => sum + mark, 0);

  // Вычисляем сумму оценок для каждого сына
  const firstSonTotal = sumMarks(diary1);
  const secondSonTotal = sumMarks(diary2);
  const thirdSonTotal = sumMarks(diary3);

  // Сравниваем суммы и определяем, кто получает велосипед
  if (firstSonTotal > secondSonTotal && firstSonTotal > thirdSonTotal) {
    return "I need to buy a bicycle for my first son.";
  } else if (secondSonTotal > firstSonTotal && secondSonTotal > thirdSonTotal) {
    return "I need to buy a bicycle for my second son.";
  } else if (thirdSonTotal > firstSonTotal && thirdSonTotal > secondSonTotal) {
    return "I need to buy a bicycle for my third son.";
  } else {
    // Если суммы равны, выбираем младшего по возрасту
    if (
      thirdSonTotal === Math.max(firstSonTotal, secondSonTotal, thirdSonTotal)
    ) {
      return "I need to buy a bicycle for my third son.";
    } else if (secondSonTotal === Math.max(firstSonTotal, secondSonTotal)) {
      return "I need to buy a bicycle for my second son.";
    } else {
      return "I need to buy a bicycle for my first son.";
    }
  }
}
