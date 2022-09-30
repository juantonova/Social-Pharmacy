const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <div>
      {user ? (
        <nav className="navbar navbar-expand-lg navbar-style">
          <div className="container-fluid">

          <img src="/img/pharmacy-icon.png" alt="logo" width="30"></img>
            <a className="navbar-brand navbar-style" href="#">Аптека</a>
            <button className="navbar-toggler navbar-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse navbar_my" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <a className="nav-link navbar-style" aria-current="page" href="/">Главная</a>
                {user && !user.isAdmin && (<a className="nav-link navbar-style" href={`/profile/${user.id}`}>Личный кабинет</a>)}
              </div>
              <div className="navbar__right navbar-style">
                Привет,
                {' '}
                { user.name }
                !
                <a className="nav-link navbar-style" href="/login/logout">Выйти</a>
                <a className="nav-link navbar-style" href="/order">
                  {user && !user.isAdmin && (<img width="30" src="/img/basket.png" alt="Корзина" />)}
                </a>
                {user && user.isAdmin && (
                  <a className="nav-link navbar-style" href="/addform">Кабинет админа</a>
                )}
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

            <img src="/img/pharmacy-icon.png" alt="logo" width="30"></img>
            <div className="navbar-brand">Аптека</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <a className="nav-link navbar-style" aria-current="page" href="/">Главная</a>
                <a className="nav-link navbar-style" href="/login">Авторизоваться</a>
                <a className="nav-link navbar-style" href="/registration">Зарегистрироваться</a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
