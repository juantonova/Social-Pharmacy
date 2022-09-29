const React = require("react");

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />
        <script defer src="/js/main.js" />
        <script defer src="/js/cards.js" />
        <script defer src="/js/edit.js" />
        <script defer src="/js/LogaRega.js" />
        <title>Farmacy</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
