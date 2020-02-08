import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import '../../shared/app.css';

const client = Client.buildClient({
  storefrontAccessToken: 'b0ce81d4056a180c1e5e754a11f58dbb',
  domain: 'musles-apparel.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
