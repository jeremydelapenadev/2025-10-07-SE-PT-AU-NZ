const fetch = require("node-fetch");

const getProducts = async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    const { category, limit, search } = req.query;

    // Filter by category
    if (category) {
      products = products.filter((p) => p.category === category);
    }

    // Search by title
    if (search) {
      products = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Limit results
    if (limit) {
      products = products.slice(0, Number(limit));
    }

    // Process products
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
    console.error("Controller error:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = { getProducts };