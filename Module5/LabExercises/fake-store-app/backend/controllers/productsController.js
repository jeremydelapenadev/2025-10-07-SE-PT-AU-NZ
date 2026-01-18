const fetch = require("node-fetch");

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Optional: you can process products here, e.g., truncate description
    const processedProducts = products.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description.length > 100 
        ? p.description.slice(0, 100) + "..." 
        : p.description,
      price: p.price,
      category: p.category,
      image: p.image,
    }));

    res.json(processedProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = { getProducts }