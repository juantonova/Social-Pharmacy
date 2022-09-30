const container = document.querySelector('.container-xxl');

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
