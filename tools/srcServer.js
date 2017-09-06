import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import MagentoCategoryApi from '../src/api/MagentoCategoryApi';
import MagentoAccountInfo from '../src/api/MagentoAccountInfo';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.get(MagentoCategoryApi.Path4Categories, function(req, res, next) {
    
    res.set('Content-Type', 'application/json');
    MagentoCategoryApi.loadRootCategory(MagentoAccountInfo.url).then(response => {
        console.log(response.data);
        
        res.status(200).json({ status: 200, data: response.data });    
        next();
    }).catch(error => {
        console.log(error);
        res.send( { status: 500, data: error }); 
        next();
    });
    
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
