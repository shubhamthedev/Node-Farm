module.exports = (temp, { productName, image, price, from, nutrients, quantity, description, id, organic }) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, productName);
  output = output.replace(/{%IMAGE%}/g, image);
  output = output.replace(/{%PRICE%}/g, price);
  output = output.replace(/{%FROM%}/g, from);
  output = output.replace(/{%NUTRIENTS%}/g, nutrients);
  output = output.replace(/{%QUANTITY%}/g, quantity);
  output = output.replace(/{%DESCRIPTION%}/g, description);
  output = output.replace(/{%ID%}/g, id);
  if (!organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }
  return output;
};
