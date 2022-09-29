const React = require("react");
const Layout = require("./Layout");

function Profile({ user, title }) {
  return (
    <Layout title={title} user={user}>
      <main className="">
        <div className="container-xxl row justify-content-center align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://thumbs.dreamstime.com/b/%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D0%B5%D1%81%D1%81%D1%8B-%D0%B8%D0%BB%D0%B8-%D1%84%D0%B5%D1%80%D0%B7%D1%8F-%D1%81-%D0%BA%D1%80%D0%BE%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%B5-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D0%B5-monochrome-152921065.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ваш профиль</h5>
              <p className="card-text">Бабушкина аптека</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Name: {user.name}</li>
              <li className="list-group-item">
                email:
                {user.email}
              </li>
              {/* <li className="list-group-item">IP____</li> */}
            </ul>
            <div className="card-body row justify-content-center align-items-center">
              <a
                href={`/edit/${user.id}`}
                className="btn btn-primary p-3 border"
              >
                Изменить профиль
              </a>
              <button type="button" className="btn btn-danger p-3 border">
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
