const React = require('react');
const FreeCard = require('./FreeCard');

function FreeMeds({ meds, user }) {
  return (
    <div class="free">
    <h3 className="headers">Бесплатные лекарства недели</h3>
    <div className="free-card-list">
      {meds.map((med) => (
        <FreeCard med={med} user={user} />
      ))}
    </div>
    </div>
  );
}

module.exports = FreeMeds;
