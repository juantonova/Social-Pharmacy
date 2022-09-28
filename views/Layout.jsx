const React = require('react');

function Layout({ children }) {
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/main.css" />
      <script defer src="/js/bootstrap.bundle.min.js" />
      <script defer src="/js/main.js" />
      <title>Farmacy</title>
    </head>
    <body>
      {children}
    </body>
  </html>;
}

module.exports = Layout;
