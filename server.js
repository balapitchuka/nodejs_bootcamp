const http = require('http');
const url = require('url');
const fs = require('fs');
const replaceData = require('./modules/replaceData');
const prodData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const prodDataPars = JSON.parse(prodData);
console.log(prodDataPars);

const overviewStr = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const productStr = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const cardStr = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const server = http.createServer((req, res) => {
  console.log(`requested url is : ${req.url}`);
  const urlPath = req.url;

  // overview page
  if (urlPath === '/' || urlPath === '/overview') {
    const productHtml = prodDataPars
      .map(element => replaceData(cardStr, element))
      .join('');

    const overviewHtml = overviewStr.replace(/{%PRODUCTS%}/, productHtml);
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(overviewHtml);

    // product page
  } else if (urlPath === '/product') {
    res.end('This is the product pagee');

    // api
  } else if (urlPath === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(prodData);

    // page not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello from owner'
    });
    res.end('<h1>Page not found!!</h1>');
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Listening to request on port 8080');
});
