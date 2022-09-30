const React = require('react');
const Layout = require('./Layout');
const AdminCard = require('./AdminCard');
const FreeAdminCard = require('./FreeAdminCard');

module.exports = function FormAddCard({ user, meds, freeMeds }) {
  console.log(freeMeds);
  return (
    <Layout user={user} title="Добавление товара">
      <div className="container">
        <h1 className="rereg">Добавить товар</h1>
        <div className="regaTable">
          <form action="api/addform" method="POST" className="add-form">
            <div>
              <input type="text" placeholder="Введите название товара" name="title" />
            </div>
            <div>
              <input type="number" placeholder="Введите цену" name="price" />
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
          <div className="free">
            <h3 className="headers">Бесплатные лекарства недели</h3>
            <div className="admin-free-card-list">
              {freeMeds.map((med) => (
                <FreeAdminCard med={med} user={user} />
              ))}
            </div>
          </div>
          <div className="full-card-list">
            {meds.map((med) => (
              <AdminCard med={med} user={user} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
