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
      const medId = event.target.closest('.card-body').id;
      const response = await fetch(`api/cards/${medId}`);
      const answer = await response.json();
      const statusBasket = event.target.closest('.status-basket');
      if (answer.basket) {
        statusBasket.textContent = 'Товар добавлен в корзину';
      } else {
        statusBasket.textContent = 'Товара нет в наличии';
      }
    }
  });
}

