const container = document.querySelector('.js-order');
const orderMake = document.querySelector('.order-make');
const finalOrder = document.querySelector('.final-order');
console.log(finalOrder)
container.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnPlus-data')) {
    const { id } = event.target.dataset;
    console.log(id);
    const response = await fetch(`/add/order/${id}`);
    const data = await response.json();
    if (data.basket) {
      event.target.parentNode.parentNode.querySelector('.counter').textContent = data.order;
    }
    if (!data.basket) {
      const info = event.target.parentNode.parentNode.querySelector('.info');

      info.textContent = 'Этот товар закончился ';
    }
  }
});

container.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btnMinus')) {
    const { id } = event.target.dataset;
    console.log(id);
    const response = await fetch(`/remove/order/${id}`);
    const data = await response.json();
    if (data.basket) {
      event.target.parentNode.parentNode.querySelector('.counter').textContent = data.order;
    }
  }
});

if (orderMake) {
  orderMake.addEventListener('click', async () => {
    const response = await fetch('api/ordermake');
    const data = await response.json();
    finalOrder.innerHTML = data.status;
  });
}
