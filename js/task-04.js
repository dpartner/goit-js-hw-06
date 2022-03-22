// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

const ref = {
  value: document.querySelector('#value'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
};

ref.decrementButton.addEventListener('click', onDownValue);
ref.incrementButton.addEventListener('click', onUpValue);

let counterValue = Number(ref.value.textContent);

function onDownValue() {
  counterValue -= 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}

function onUpValue() {
  counterValue += 1;
  console.log(counterValue);
  ref.value.textContent = counterValue;
  return counterValue;
}
