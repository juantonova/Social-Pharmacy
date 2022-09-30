const sortUp = document.querySelector('#sort-up');
const sortDown = document.querySelector('#sort-down');
const cardList = document.querySelector('.full-card-list');
const addForm = document.querySelector('.add-form');
const freeCardList = document.querySelector('.free-card-list');
const addErr = document.querySelector('.addErr');
const adminFreeCardList = document.querySelector('.admin-free-card-list');

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
    event.preventDefault();
    if (event.target.classList.contains('buy-buy-button')) {
      const med = event.target.closest('.card-body');
      const medId = med.id;
      const response = await fetch(`api/cards/${medId}`);
      const answer = await response.json();
      const statusBasket = med.querySelector('.status-basket');
      const inStock = med.querySelector('.in-stock');
      if (answer.inStock <= 0) {
        inStock.classList = 'not-in-stock';
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

if (addForm) {
  addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      action, method, price, url, title, inStock,
    } = event.target;
    const response = await fetch(action, {
      method,
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        title: title.value,
        price: price.value,
        url: url.value,
        inStock: inStock.value,
      }),
    });
    const answer = await response.json();
    if (answer.status) {
      window.location.href = '/';
    } else {
      addErr.textContent = answer.message;
    }
  });
}

if (freeCardList) {
  freeCardList.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.classList.contains('buy-buy-button')) {
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

// удаление бесплатной карточки
// if (adminFreeCardList) {
//   adminFreeCardList.addEventListener('click', async (event) => {
//     event.preventDefault();
//     if (event.target.classList.contains('delete')) {
//       const { id } = event.target;
//       const response = await fetch(`/api/cards/admin/${id}`, {
//         method: 'DELETE',
//       });
//       const answer = await response.json();

//       if (answer.delete) {
//         document.querySelector(`#${id}`).remove();
//       }
//     }
//   });
// }
// удаление обычной карточки

// изменение карточки
