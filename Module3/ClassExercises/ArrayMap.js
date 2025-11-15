const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
{ id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' },
{ id: 2, title: "Kid's Hoodie", price: 54.95, category: 'Winter' },
];

let categories = products.map((product) => product.category); // transforms the array and extracts only the categories

console.log(categories);

let prices = products.map((product) => product.price); // transforms the array and extracts only the categories


// to eliminate duplicates

let categories1 = new Set(products.map((product) => product.category));

console.log(categories1);
console.log (prices);

let raisedPrices = products.map((product) => ({
    ... product,
    price: product.price + 5,
}));

console.log(raisedPrices);

