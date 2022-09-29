const React = require('react');

function FreeCard({ med, user }) {
  return (

    <div className="card border border-secondary med-card" key={med.id}>
      <div className="card-body" id={med.id}>
        <div className="img-card"><img src={med.img} className="card-img-top" alt={`${med.title} image`} /></div>
        <h5 className="card-title">{med.title}</h5>
        {(med.inStock > 0) ? (<div className="in-stock">В наличии</div>) : (<div className="in-stock">Нет в наличии</div>)}
        
        {user && <a href="#" className="btn btn-outline-success buy-button">В корзину</a>}
        {/* {user ? <a href="#" className="btn btn-outline-success buy-button">Купить</a>} : <></> */}
        <p className="status-basket"></p>
      </div>
    </div>
  );
}

module.exports = FreeCard;
