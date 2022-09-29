const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

function CardsList({ meds, user }) {
  return (
    <Layout user={user}>
      <div className="card-list">
        {meds.map((med) => <Card med={med} />)}
      </div>
    </Layout>
  );
}

module.exports = CardsList;
