const sortUp = document.querySelector('#sort-up');
const sortDown = document.querySelector('#sort-down');
const cardList = document.querySelector('.card-list');
const buyButton = document.querySelectorAll('.buy-button');

if (sortUp) {
  sortUp.addEventListener('click', (event) => {
    console.log(sortUp)
    window.location.href = '/up';
  });
}

if (sortDown) {
  sortDown.addEventListener('click', (event) => {
    console.log(sortDown)
    window.location.href = '/down';
  });
}

if (cardList) {
  cardList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('buy-button')) {
      const medId = event.target.closest('.card-body').id;
      
    }
  })
}
