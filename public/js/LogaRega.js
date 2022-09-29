const login = document.querySelector('.login');

// логинизация пользователя
login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const password = event.target.password.value;

  const responce = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name, password,
    }),
  });
  const result = await responce.json();
  if (result.status === true) {
    window.location.href = '/';
  } else {
    document.querySelector('.error').innerText = result.message;
  }
});

// регистрация пользователя
const registration = document.querySelector('.auth');
const regErr = document.querySelector('.regErr');

if (registration) {
  registration.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {
      name, email, password, confirmPassword,
    } = event.target;

    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }),
    });
    const answer = await response.json();
    if (answer.status === 'error') {
      regErr.innerHTML = answer.message;
    } else {
      window.location.assign('/');
    }
  });
}
