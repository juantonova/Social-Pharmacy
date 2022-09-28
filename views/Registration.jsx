const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ }) {
    return (
            <Layout title="Регистрация">
              <div className="container">
              <h1 className="rereg">Регистрация</h1>
              <div className="regaTable">
              <form action="/registration" method="POST" className="auth">
                <div>
                <input type="text" placeholder="Введите ваше имя" name="name" className="firstLogin" />
                </div>
                <div>
                <input type="email" placeholder="Введите ваш email" name="email" className="firstEmail" />
                </div>
                <div>
                <input type="password" placeholder="Введите пароль" name="password" className="firstPassword" />
                </div>
                <div>
                <input type="password" placeholder="Подтвердите пароль" name="confirmPassword" className="firstPassword" />
                </div>
                <div className="btnStyle">
                <button className="btn" type="submit">Зарегистрироваться</button>
                </div>
              </form>
              <div className="regErr" />
              </div>
              </div>
            </Layout>
          );
}