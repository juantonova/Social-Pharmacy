const editProfileform = document.querySelector('#editProfileform');
const btnDeletProfile = document.querySelector('#btnDeletProfile');

// fetch на изменение профиля
if (editProfileform) {
  editProfileform.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, name, email } = event.target;
    const response = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
      }),
    });
    const data = await response.json();
    if (data.updated) {
      window.location.href = `/profile/${data.id}`;
    }
  });
}

// fetch на удаление профиля
if (btnDeletProfile) {
  btnDeletProfile.addEventListener('click', async (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    const { url } = event.target.dataset;
    console.log(url);
    const response = await fetch(`/api/edit/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
    });
    const data = await response.json();
    if (data.deleted) {
      window.location.href = '/';
    }
  });
}
