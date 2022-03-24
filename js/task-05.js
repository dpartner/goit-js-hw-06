// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const ref = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('span#name-output'),
};

ref.input.addEventListener('input', onChangeName);

function onChangeName(event) {
  const inputValue = event.currentTarget.value;
  ref.output.textContent = inputValue !== '' ? inputValue : 'Anonymous';
}
