const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function CardsList({ meds }) {
  return (
    <Layout>
      <div>
        <span>Сортировать по цене: </span>
        <button type="button" className="btn btn-outline-success sort-button" id="sort-down"><img src="/img/icons8-sort-down-16.png" alt="arrow-down"   /></button>
        <button type="button" className="btn btn-outline-success sort-button" id="sort-up"><img src="/img/icons8-sort-up-16.png" alt="arrow-up"   /></button>
      </div>
      <div className="card-list">
        {meds.map((med) => <Card med={med} />)}
      </div>
    </Layout>
  );
}

module.exports = CardsList;
