const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
{ id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' },
{ id: 2, title: "Kid's Hoodie", price: 54.95, category: 'Winter' },
]

//sort in ascending order
products.sort((product1, product2) => product1.price - product2.price);

console.log(products);

//sort in descending order
products.sort((product1, product2) => product2.price - product1.price);

console.log(products);

// sorting by title

products.sort((product1, product2) => product1.title > product2.title ? 1 : -1);

console.log(products);

// clone and sort

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort((a,b) => a - b);
console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '35', '41', '81', '102', '1004' ]