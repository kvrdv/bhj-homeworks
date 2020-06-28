// Элементы управления количеством:
let quantityControls = document.querySelectorAll('.product__quantity-control');

// Кнопки добавить в корзину:
let addButton = document.querySelectorAll('.product__add');

// Корзина:
let cart = document.querySelector('.cart__products');

// Обработчик события клик по элементу управления количеством:
quantityControls.forEach((quantity) => {
  quantity.addEventListener('click', (eventObject) => {

    // Минус с отсечкой нуля:
    if (quantity.classList.contains('product__quantity-control_dec') && eventObject.currentTarget.nextElementSibling.textContent > 1) {
      (eventObject.currentTarget.nextElementSibling.textContent)--;
    };

    // Плюс:
    if (quantity.classList.contains('product__quantity-control_inc')) {
      (eventObject.currentTarget.previousElementSibling.textContent)++;
    };
  });
});

// Добавление товара в корзину:
addButton.forEach((button) => {
  button.addEventListener('click', (eventButton) => {

    // Товар по которому кликнули и сведения о нём:
    let product = eventButton.currentTarget.closest('.product');
    let productId = product.dataset.id;
    let productImage = product.querySelector('.product__image').getAttribute('src');
    let productQuantity = product.querySelector('.product__quantity-value').textContent;

    // Проверка наличия товара в корзине:
    let cartElement = [...cart.children].find(cartItem => cartItem.dataset.id === productId);

    //Если есть:
    if (cartElement) {
      let quantity = cartElement.querySelector('.cart__product-count').textContent;
      cartElement.querySelector('.cart__product-count').textContent = Number(productQuantity) + Number(quantity);
    } else {

      // Если нет:
      cartElement = (document.querySelector('template').content).cloneNode(true);
      cartElement.querySelector('.cart__product').dataset.id = productId;
      cartElement.querySelector('img').src = productImage;
      cartElement.querySelector('.cart__product-count').textContent = productQuantity;
      cart.appendChild(cartElement);

    };
  });
}); 