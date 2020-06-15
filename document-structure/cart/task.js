// Элементы управления количеством:
let quantityControls = document.querySelectorAll('.product__quantity-control');

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

// Кнопки добавить в корзину:
let addButton = document.querySelectorAll('.product__add');

// Добавление товара в корзину:
addButton.forEach((button) => {
  button.addEventListener('click', (eventButton) => {

    // Корзина:
    let cart = document.querySelector('.cart__products');

    // Товар по которому кликнули и сведения о нём:
    let product = eventButton.currentTarget.closest('.product');
    let productId = product.dataset.id;
    let productImage = product.querySelector('.product__image').getAttribute('src');
    let productQuantity = product.querySelector('.product__quantity-value').textContent;

    cart.insertAdjacentHTML('beforeEnd', '<div class="cart__product" data-id="1"><img class="cart__product-image" src="image.png"><div class="cart__product-count">0</div></div>');
    document.querySelector('.cart__product').dataset.id = productId;
    document.querySelector('.cart__product-image').setAttribute('src', productImage);
    document.querySelector('.cart__product-count').textContent = Number(document.querySelector('.cart__product-count').textContent) + Number(productQuantity);
    
    console.log(cart.children);

  });
});