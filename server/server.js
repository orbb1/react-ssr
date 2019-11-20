import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import App from '../src/App';

const PORT = 8080;
const app = express();

const router = express.Router();
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const serverRenderer = (req, res) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
};
router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.use(router);

const root = {
  message: () => 'Hello World!',
};
app.use(
  '/graphql',
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
