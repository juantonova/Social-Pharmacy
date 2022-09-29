const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div>
      {user ? (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

            <a className="navbar-brand" href="#">Аптека</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse navbar_my" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <a className="nav-link active" aria-current="page" href="/">Главная</a>
                <a className="nav-link" href="#">Личный кабинет</a>
              </div>
              <div className="navbar__right">
                Привет,
                {' '}
                { user.name }
                !
                <a className="nav-link" href="/login/logout">Выйти</a>
                <a className="nav-link active" href="#">
                  <img width="30" src="/img/basket.png" alt="Корзина" />
                </a>
                {user.isAdmin && (
                  <a className="nav-link" href="#">Кабинет админа</a>
                )}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Аптека</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Главная</a>
                <a className="nav-link" href="/login">Авторизоваться</a>
                <a className="nav-link" href="/registration">Зарегистрироваться</a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
