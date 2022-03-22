// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const allCategoriesEl = document.querySelectorAll('li.item');
// console.log(allCategoriesEl);

const totalCategories = allCategoriesEl.length;
console.log('Number of categories: ', totalCategories);

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesProperty = category => {
  console.log('Category: ', category.firstElementChild.textContent);
  console.log('Elements: ', category.lastElementChild.children.length);
};

categoriesProperty(allCategoriesEl[0]);
categoriesProperty(allCategoriesEl[1]);
categoriesProperty(allCategoriesEl[2]);
