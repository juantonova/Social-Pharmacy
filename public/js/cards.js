const sortUp = document.querySelector('#sort-up');
const sortDown = document.querySelector('#sort-down');
const cardList = document.querySelector('.card-list');

if (sortUp) {
  sortUp.addEventListener('click', () => {
    window.location.href = '/up';
  });
}

if (sortDown) {
  sortDown.addEventListener('click', () => {
    window.location.href = '/down';
  });
}

if (cardList) {
  cardList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('buy-button')) {
      const med = event.target.closest('.card-body');
      const medId = med.id;
      const response = await fetch(`api/cards/${medId}`);
      const answer = await response.json();
      const statusBasket = med.querySelector('.status-basket');
      const inStock = med.querySelector('.in-stock');
      if (answer.inStock <= 0) {
        inStock.textContent = 'Нет в наличии';
      } else {
        inStock.textContent = 'В наличии';
      }
      if (answer.basket) {
        statusBasket.textContent = 'Товар добавлен в корзину';
      } else {
        statusBasket.textContent = 'Товара нет в наличии';
      }
    }
  });
}
