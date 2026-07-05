const db = require("../config/database");

const getDashboardStats = (req, res) => {

    db.get(

        `
        SELECT
            (SELECT COUNT(*) FROM products) AS products,
            (SELECT COUNT(*) FROM users) AS users,
            (SELECT COUNT(*) FROM orders) AS orders,
            (
                SELECT IFNULL(SUM(total),0)
                FROM orders
            ) AS revenue
        `,

        [],

        (err, row) => {

            if (err)
                return res.status(500).json(err);

            res.json(row);

        }

    );

};

module.exports = {
    getDashboardStats,
};