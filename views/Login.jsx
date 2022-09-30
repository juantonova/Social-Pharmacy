const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout title="Authorization">
      <div className="container">
        <h1 className="rereg">Авторизация</h1>
        <div className="regaTable">
          <div className="error" />
          <form method="POST" className="login">
            <input type="text" placeholder="Введите ваш логин" name="name" className="firstLogin form-control varform" />
            <input type="password" placeholder="Введите ваш пароль" name="password" className="firstPassword form-control varform" />
            <button className="btn btn-success" type="submit">Войти</button>
          </form>
          <div className="error" />
        </div>
      </div>
    </Layout>
  );
};
