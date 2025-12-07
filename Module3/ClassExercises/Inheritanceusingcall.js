function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}

function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}

const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`
);

function Electronics(name, price) {
  Product.call(this, name, price);
  this.toaster = "toaster";
}
const toaster1 = new Electronics("Breville", 50);

console.log(
  `${toaster1.name} is a ${toaster1.toaster} and costs $${toaster1.price} (${toaster1.salePrice} on sale.)`
);
