//находим кнопку в dom дереве
const button = document.querySelector("button");
//добавляем обработчик событий, чтобы при клике на кнопку генерировалось случайное слов
button.addEventListener("click", function () {
    //находим элемент в который будем записывать новое слово
  const newWord = document.querySelector(".newWord");
  //создаем строку из которой будем генерировать слово
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  //находим индексы для нового слова
  const index1 = Math.floor(Math.random() * alphabet.length);
  const index2 = Math.floor(Math.random() * alphabet.length);
  const index3 = Math.floor(Math.random() * alphabet.length);
  const index4 = Math.floor(Math.random() * alphabet.length);
  //создаем новое слово, используя рандомные индексы
  const randomWord =
    alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];
    //выводим новое слово в консоль
  console.log(randomWord);
  //добавляем новое слово на страницу
  newWord.textContent = randomWord;
});
