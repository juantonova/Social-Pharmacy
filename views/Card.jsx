const React = require('react');

function Card({ med }) {
  return (

    <div className="card border border-secondary med-card" key={med.id}>
      <div className="card-body">
        <img src={med.img} className="card-img-top" alt={`${med.title} image`}   />
        <h5 className="card-title">{med.title}</h5>
        <p className="card-text">Цена: {med.price} руб.</p>
        <p className="card-text">Цена по акции: {med.price / 100 * 90} руб.</p>
        {(med.inStock > 0) ? (<div>В наличии</div>) : (<div>Нет в наличии</div>)}
        
        <a href="#" className="btn btn-outline-success">Buy</a>
      </div>
    </div>
  );
}

module.exports = Card;
