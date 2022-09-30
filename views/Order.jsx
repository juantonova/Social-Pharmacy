const React = require('react');
const Layout = require('./Layout');

function Order({ user, orders, title, meds }) {
  return (
    <Layout title={title} user={user} orders={orders} orders={meds}>
      <div className="container-xxl">
        <h3 className="card-title">Корзина </h3>
        <div>
          <h5>Стоимость заказа</h5>
          <button type="button" className="btn btn-outline-primary">
            Оформить заказ
          </button>
        </div>

        {meds.map((med) => (
          <div className="card mb-3" style={{ maxWidth: '540px' }} key={med.id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={med.img} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Цена {med.price} руб.</h5>

                  <p className="card-text">{med.title}</p>
                  <p className="card-text">
                    колличество в корзине
                    {med.count}
                  </p>
                  <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group"
                  >
                    <button
                      id="btnPlus"
                      type="button"
                      data-count={med.count}
                      className="btn btn-info p-2 border btnPlus"
                    >
                      + {med.count} добавить товар
                    </button>
                    <button
                      id="btnMinus"
                      type="button"
                      data-count={med.count}
                      className="btn btn-warning p-2 border"
                    >
                      - {med.count} убрать товар
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Order;
