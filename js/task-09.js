function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

const ref = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.body,
};

ref.button.addEventListener('click', onChangeBackground);

function onChangeBackground() {
  const randomColor = getRandomHexColor();
  ref.body.style.background = randomColor;
  ref.span.textContent = randomColor;
}
