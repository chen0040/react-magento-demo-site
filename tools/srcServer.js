import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import MagentoCategoryApi from '../src/api/MagentoCategoryApi';
import MagentoAccountInfo from '../src/api/MagentoAccountInfo';
import MagentoAccountApi from '../src/api/MagentoAccountApi';
import MagentoProductApi from '../src/api/MagentoProductApi';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.json());

app.use(require('webpack-hot-middleware')(compiler));

app.get(MagentoCategoryApi.Path4Categories, function(req, res, next) {
    
    res.set('Content-Type', 'application/json');
    MagentoCategoryApi.loadRootCategory(MagentoAccountInfo.url).then(response => {
        console.log(response.data);
        
        res.status(200).json(response.data);    
        next();
    }).catch(error => {
        console.log(error);
        res.send(error); 
        next();
    });
    
});

app.get(MagentoCategoryApi.Path4Categories + '/:categoryId/products', function(req, res, next) {
    
    res.set('Content-Type', 'application/json');
    MagentoCategoryApi.loadProducts(MagentoAccountInfo.url, req.params.categoryId).then(response => {
        console.log(response.data);
        
        res.status(200).json(response.data);    
        next();
    }).catch(error => {
        console.log(error);
        res.send(error); 
        next();
    });
    
});

app.get(MagentoProductApi.Path4Products + '/:sku', function(req, res, next) {
    res.set('Content-Type', 'application/json');
    MagentoProductApi.loadProduct(MagentoAccountInfo.url, req.params.sku).then(response => {
        console.log(response.data);
        
        res.status(200).json(response.data);    
        next();
    }).catch(error => {
        console.log(error);
        res.send(error); 
        next();
    });
});

app.post(MagentoAccountApi.Path4LoginAsClient, function(req, res, next) {
    res.set('Content-Type', 'application/json');
    let username = req.body.username;
    let password = req.body.password;
    MagentoAccountApi.loginAsClient(MagentoAccountInfo.url, username, password).then(response => {
        console.log(response.data);
        
        res.status(200).json(response.data);    
        next();
    }).catch(error => {
        console.log(error);
        res.send(error); 
        next();
    });
    
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
