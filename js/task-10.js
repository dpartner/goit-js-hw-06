function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const ref = {
  input: document.querySelector('input[type="number"]'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  container: document.querySelector('#boxes'),
};

ref.create.addEventListener('click', onCreate);
ref.destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const allElements = [];
  let widthValue = 30;
  let heightValue = 30;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${widthValue}px`;
    element.style.height = `${heightValue}px`;
    element.style.background = getRandomHexColor();
    element.classList.add('square');

    widthValue += 10;
    heightValue += 10;

    allElements.push(element);
  }
  return ref.container.append(...allElements);
}

function onCreate() {
  createBoxes(ref.input.value);
}

function destroyBoxes() {
  ref.container.innerHTML = '';
}
