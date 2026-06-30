const db = require("../config/database");

const getOrders = (req, res) => {

    db.all(

        "SELECT * FROM orders ORDER BY id DESC",

        [],

        (err, rows) => {

            if(err)
                return res.status(500).json(err);

            res.json(rows);

        }

    );

};

module.exports = {

    getOrders

};