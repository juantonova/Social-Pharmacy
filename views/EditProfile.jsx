const React = require('react');
const Layout = require('./Layout');

function EditProfile({ user, title }) {
  // console.log(user,'user')
  return (
    <Layout title={title} user={user}>
      <main className="">
        <h2>Внесите изменения</h2>
        <div className="container-xxl input-group">
          <form id="editProfileform" action={`/api/edit/${user.id}`}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Сохранить изменения
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}

module.exports = EditProfile;
