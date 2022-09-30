const React = require('react');
const Layout = require('./Layout');

module.exports = function FormAddCard({ }) {
    return (
            <Layout title="Добавление товара">
              <div className="container">
              <h1 className="rereg">Добавить товар</h1>
              <div className="regaTable">
              <form action="api/addform" method="POST" className="add-form">
                <div>
                <input type="text" placeholder="Введите название товара" name="title" />
                </div>
                <div>
                <input type="number" placeholder="Введите цену" name="price"  />
                </div>
                <div>
                <input type="text" placeholder="Введите URL картинки" name="url" />
                </div>
                <div>
                <input type="number" placeholder="Введите количество товара на складе" name="inStock" />
                </div>
                <div className="btnStyle">
                <button className="btn" type="submit">Добавить товар</button>
                </div>
              </form>
              <div className="addErr" />
              </div>
              </div>
            </Layout>
          );
}