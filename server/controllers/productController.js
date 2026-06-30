const db = require("../config/database");

const getProducts = (req, res) => {

    db.all(
        "SELECT * FROM products",

        [],

        (err, rows) => {

            if (err)
                return res.status(500).json(err);

            res.json(rows);

        }

    );

};

const getProduct = (req, res) => {

    db.get(

        "SELECT * FROM products WHERE id=?",

        [req.params.id],

        (err, row) => {

            if (err)
                return res.status(500).json(err);

            res.json(row);

        }

    );

};

const addProduct = (req, res) => {

    const {
        name,
        description,
        category,
        price,
        stock
    } = req.body;

    const image = req.file
        ? `/uploads/${req.file.filename}`
        : "";

    db.run(

        `INSERT INTO products
        (name,description,category,image,price,stock)
        VALUES(?,?,?,?,?,?)`,

        [
            name,
            description,
            category,
            image,
            price,
            stock
        ],

        function(err){

            if(err)
                return res.status(500).json(err);

            res.json({

                message:"Product Added",

                id:this.lastID

            });

        }

    );

};
function deleteProduct(req, res) {

    db.run(

        "DELETE FROM products WHERE id=?",

        [req.params.id],

        function (err) {

            if (err)
                return res.status(500).json(err);

            res.json({
                message: "Deleted"
            });

        }

    );

}

const updateProduct = (req, res) => {

    const {
        name,
        description,
        category,
        image,
        price,
        stock
    } = req.body;

    db.run(

        `UPDATE products
         SET
            name=?,
            description=?,
            category=?,
            image=?,
            price=?,
            stock=?
         WHERE id=?`,

        [
            name,
            description,
            category,
            image,
            price,
            stock,
            req.params.id
        ],

        function(err){

            if(err)
                return res.status(500).json(err);

            res.json({
                message:"Product Updated"
            });

        }

    );

};

module.exports = {

    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct

};