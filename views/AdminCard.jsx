const React = require('react');

module.exports = function adminCard({ user, med }) {
  return (

    <div className="card border border-secondary med-card" key={med.id}>
      <div className="card-body" id={med.id}>
       <div className='img-card'> <img src={med.img} className="card-img-top" alt={`${med.title} image`} /></div>
        <h5 className="card-title">{med.title}</h5>
        <span className="card-text">Цена: {med.price} руб.</span>
        <span className="card-text">Цена по акции: {med.price / 100 * 90} руб.</span>
        {(med.inStock > 0) ? (<div className="in-stock">В наличии</div>) : (<div className="not-in-stock">Нет в наличии</div>)}
        {(user.isAdmin) ? (<a href="/" className="btn btn-outline-success buy-button btn-style">Изменить</a>) : (<></>)}
        {(user.isAdmin) ? (<a href="#" className="btn btn-outline-success buy-button btn-style">Удалить</a>) : (<></>)}
        <p className="status-basket"></p>
      </div>
    </div>
  );
}