import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Root from './Root';
import configureStore from './store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Netflix</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/main.js"></script>
          <link rel="stylesheet" href="/main.css"></link>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore(undefined, { ssr: true });
    const context = {};
    const root = (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );
    const html = renderToString(root)

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    store.runSaga().done.then(() => {
      res.send(renderHTML(html, store.getState()));
    });

    store.close();
  };
}