const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/novacart.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("✅ SQLite Connected");

    db.serialize(() => {

      db.run(`
      CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT DEFAULT 'user'
      )
      `);

      db.run(`
      CREATE TABLE IF NOT EXISTS products(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        category TEXT,
        image TEXT,
        price REAL,
        stock INTEGER,
        rating REAL DEFAULT 5
      )
      `);

      db.run(`
      CREATE TABLE IF NOT EXISTS orders(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        total REAL,
        status TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
      `);

      db.run(`
      CREATE TABLE IF NOT EXISTS order_items(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        orderId INTEGER,
        productId INTEGER,
        quantity INTEGER
      )
      `);

      console.log("✅ Tables Ready");

    });

  }
});

module.exports = db;