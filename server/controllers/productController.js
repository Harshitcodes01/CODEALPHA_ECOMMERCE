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
        image,
        price,
        stock

    } = req.body;

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

const deleteProduct=(req,res)=>{

    db.run(

        "DELETE FROM products WHERE id=?",

        [req.params.id],

        function(err){

            if(err)
                return res.status(500).json(err);

            res.json({

                message:"Deleted"

            });

        }

    );

};

module.exports={

    getProducts,

    getProduct,

    addProduct,

    deleteProduct

};