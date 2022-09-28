const React = require('react');
const Layout = require('./Layout');

function CardsList() {
  return (
    <Layout>
      <div className="card-list container-xxl"> 
      <div className='card'>
      <div class="card-body">
      <img src="..." class="card-img-top" alt="..."   />
    <h5 class="card-title">Название лекарства</h5>
    <p class="card-text">Price</p>
    <a href="#" class="btn btn-primary">Buy</a>
  </div> 
      </div>
      </div>
    </Layout>
  );
}

module.exports = CardsList;
