const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const path = require('path');

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/api/test', (req, res) => {
  res.json({
    message: 'This is a test!',
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});


app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening to port 3000.');
});
