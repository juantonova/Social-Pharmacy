const React = require('react');
const Navbar = require('./Navbar');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <script defer src="https://api-maps.yandex.ru/2.1/?apikey=d4d96d8c-804e-42f5-930e-b5913ff279e2&lang=ru_RU" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <script defer src="/js/main.js" />
        <script defer src="/js/cards.js" />
        <script defer src="/js/edit.js" />
        <script defer src="/js/LogaRega.js" />
        <script defer src="/js/order.js" />
        <script defer src="/js/ya.map.js" />
        <title>Farmacy</title>
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
