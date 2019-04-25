import express from 'express';
import { resolve } from 'path';
import webpackMiddleware from './webpackMiddleware.js';

const app = express();

app.use(webpackMiddleware('../webpack.common.js'));
app.use('/bundle', express.static(resolve(__dirname, '../dist/bundle.js')));
app.get('/', (req, res) => res.sendFile('index.html', {
    root: resolve(__dirname, '../public/')
}));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));