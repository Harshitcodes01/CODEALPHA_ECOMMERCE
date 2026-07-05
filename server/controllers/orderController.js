const db = require("../config/database");

const placeOrder = (req, res) => {

    const {

        userId,
        customerName,
        email,
        phone,
        address,
        city,
        state,
        pincode,
        paymentMethod,
        total,
        items

    } = req.body;

    db.run(

        `INSERT INTO orders
        (
            userId,
            customerName,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            paymentMethod,
            total,
            status
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?)`,

        [

            userId,
            customerName,
            email,
            phone,
            address,
            city,
            state,
            pincode,
            paymentMethod,
            total,
            "Pending"

        ],

        function (err) {

            if (err)
                return res.status(500).json(err);

            const orderId = this.lastID;

            items.forEach(item => {

                db.run(

                    `INSERT INTO order_items
                    (
                        orderId,
                        productId,
                        productName,
                        quantity,
                        price,
                        subtotal
                    )
                    VALUES(?,?,?,?,?,?)`,

                    [

                        orderId,
                        item.id,
                        item.name,
                        item.quantity,
                        item.price,
                        item.price * item.quantity

                    ]

                );

            });

            res.json({

                success: true,
                message: "Order Placed",

                orderId

            });

        }

    );

};

const getOrders = (req, res) => {

    db.all(

        "SELECT * FROM orders ORDER BY id DESC",

        [],

        (err, rows) => {

            if (err)
                return res.status(500).json(err);

            res.json(rows);

        }

    );

};

module.exports = {

    placeOrder,

    getOrders

};