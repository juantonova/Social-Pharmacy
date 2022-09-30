const React = require('react');

module.exports = function FreeCard({ med, user }) {
  return (

    <div className="card border border-secondary med-card free-card" key={med.id}>
      <div className="card-body" id={med.id}>
        <div className="img-card"><img src={med.img} className="card-img-top" alt={`${med.title} image`} /></div>
        <h5 className="card-title">{med.title}</h5>
        {(med.inStock > 0) ? (<div className="in-stock">В наличии</div>) : (<div className="not-in-stock">Нет в наличии</div>)}
        {(user && user.isAdmin) ? (<a href="#" className="btn btn-outline-success buy-button btn-style change">Изменить</a>) : (<></>)}
        {(user && user.isAdmin) ? (<a href="#" id={`id-${med.id}`} className="btn btn-outline-success buy-button btn-style delete">Удалить</a>) : (<></>)}
        <p className="status-basket" />
      </div>
    </div>
  );
};
