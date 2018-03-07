import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.babel.js';

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));

app.listen(3000);