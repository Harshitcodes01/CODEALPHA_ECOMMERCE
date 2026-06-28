const db = require("../config/database");

const products = [
  {
    name: "Nike Air Max",
    description: "Premium running shoes",
    category: "Shoes",
    image: "/images/shoe1.jpg",
    price: 5999,
    stock: 20
  },
  {
    name: "Apple Watch",
    description: "Series 9 Smart Watch",
    category: "Electronics",
    image: "/images/watch.jpg",
    price: 44999,
    stock: 15
  },
  {
    name: "Oversized Hoodie",
    description: "Winter Collection",
    category: "Fashion",
    image: "/images/hoodie.jpg",
    price: 1999,
    stock: 30
  },
  {
    name: "Gaming Mouse",
    description: "RGB Wired Mouse",
    category: "Electronics",
    image: "/images/mouse.jpg",
    price: 1499,
    stock: 50
  }
];

db.get(
  "SELECT COUNT(*) as count FROM products",
  [],
  (err, row) => {

    if (row.count === 0) {

      products.forEach((item) => {

        db.run(

          `INSERT INTO products
          (name,description,category,image,price,stock)
          VALUES(?,?,?,?,?,?)`,

          [
            item.name,
            item.description,
            item.category,
            item.image,
            item.price,
            item.stock
          ]

        );

      });

      console.log("✅ Demo Products Inserted");

    }

  }
);