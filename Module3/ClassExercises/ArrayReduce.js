const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
] // initial (below) should be 0 for reliability in calculating totals
const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)

const totalQuantity = products.reduce((currentQuantity, currentProduct) => currentQuantity + currentProduct.quantity, 0)
console.log(totalPrice.toFixed(2)) // 128.85000000000002
console.log(totalQuantity) // 10


const productabove25s = products
    .filter(prod => prod.price > 25)
    .map(prod => prod.title)

console.log(productabove25s);

// list product ids and titles in descending order of price:
const hiloProducts = [...products]
    .sort((p1, p2) => p1.price - p2.price)
    .reverse()
    .map(prod => ({id: prod.id, title: prod.title, price: prod.price}))

console.log(hiloProducts) /* [ 
    {id: 2, title: "Men's Hoodie", price: 54.95 }, 
    {id: 3, title: 'Denim Jeans', price: 49.95}, 
    {id: 1, title: 'Sleeveless Tee', price: 23.95} ] */