module.exports = (templateStr, element) => {
  let productsStr = templateStr.replace(
    /{%PRODUCTNAME%}/g,
    element.productName
  );

  productsStr = productsStr.replace(/{%PRICE%}/g, element.price);
  productsStr = productsStr.replace(/{%FROM%}/g, element.from);
  productsStr = productsStr.replace(/{%IMAGE%}/g, element.image);
  productsStr = productsStr.replace(/{%NUTRIENTS%}/g, element.nutrients);
  productsStr = productsStr.replace(/{%QUANTITY%}/g, element.quantity);
  productsStr = productsStr.replace(/{%DESCRIPTIION%}/g, element.description);
  productsStr = productsStr.replace(/{%ID%}/g, element.id);

  if (!element.organic) {
    productsStr = productsStr.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  return productsStr;
};
