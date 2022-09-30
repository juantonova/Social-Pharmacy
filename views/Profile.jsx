const React = require('react');
const Layout = require('./Layout');

function Profile({ user, title }) {
  return (
    <Layout title={title} user={user}>
      <main className="">
        <div className="container-xxl row justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="/img/—Pngtree—medicine pill capsule drugs tablet_4986373.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ваш профиль</h5>
              <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Name: {user.name}</li>
              <li className="list-group-item">
                email:
                {user.email}
              </li>
              {/* <li className="list-group-item">IP____</li> */}
            </ul>
            <div
              className="card-body row justify-content-center align-items-center"
              data-id={user.id}
            >
              <a href={`/edit/${user.id}`} className="btn btn-primary p-3 border">
                Изменить профиль
              </a>
              <button
                type="button"
                id="btnDeletProfile"
                data-url={`/api/edit/${user.id}`}
                data-id={user.id}
                className="btn btn-danger p-3 border"
              >
                Удалить профиль
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

module.exports = Profile;
