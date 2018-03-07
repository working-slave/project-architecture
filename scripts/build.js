import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
const config = '../webpack.config.babel.js';

const compiler = webpack(config)