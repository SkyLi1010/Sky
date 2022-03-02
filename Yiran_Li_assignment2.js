//Q1 (1)
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const arr = itemsObject.map(function (element) {
  return (
    "quantity:" + 2 * element.quantity + ", " + "price:" + 2 * element.price
  );
});
console.log(arr);

// Q1 (2)
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const result = itemsObject.filter((x) => {
  return x.quantity > 2 && x.price > 300;
});
console.log(result);

// Q1 (3)
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
const totalValue = itemsObject
  .map((item) => item.quantity * item.price)
  .reduce((a, b) => a + b, 0);
console.log(totalValue);

// Q2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const regex = /[^A-Za-z0-9]/g;
const array = string
  .replace(regex, " ")
  .replace(/\s+/g, " ")
  .trim()
  .toLowerCase();
console.log(array);
