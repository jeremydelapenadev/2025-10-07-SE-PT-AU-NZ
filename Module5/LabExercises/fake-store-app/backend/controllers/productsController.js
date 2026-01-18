const fetch = require("node-fetch");

const getProducts = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    const processedProducts = products.map((p) => ({
      id: p.id,
      title: p.title,
      description:
        p.description.length > 100
          ? p.description.slice(0, 100) + "..."
          : p.description,
      price: p.price,
      category: p.category,
      image: p.image
    }));

    res.json(processedProducts);
  } catch (err) {
    console.error("FETCH ERROR:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = { getProducts };