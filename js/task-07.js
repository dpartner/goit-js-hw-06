// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const ref = {
  range: document.querySelector('input#font-size-control'),
  text: document.querySelector('span#text'),
};

ref.range.addEventListener('input', onChangeFontSize);

const startFontSize = ref.range.value;
ref.text.style.fontSize = `${startFontSize}px`;

function onChangeFontSize(event) {
  ref.text.style.fontSize = `${event.currentTarget.value}px`;
}
