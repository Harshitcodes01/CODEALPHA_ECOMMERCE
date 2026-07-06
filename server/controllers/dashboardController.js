const db = require("../config/database");

const getDashboardStats = (req, res) => {

    const stats = {};

    db.get(
        "SELECT COUNT(*) AS totalProducts FROM products",
        [],
        (err, productRow) => {

            stats.totalProducts = productRow.totalProducts;

            db.get(
                "SELECT COUNT(*) AS totalOrders FROM orders",
                [],
                (err, orderRow) => {

                    stats.totalOrders = orderRow.totalOrders;

                    db.get(
                        "SELECT COUNT(*) AS totalUsers FROM users",
                        [],
                        (err, userRow) => {

                            stats.totalUsers = userRow.totalUsers;

                            db.get(
                                "SELECT SUM(total) AS revenue FROM orders",
                                [],
                                (err, revenueRow) => {

                                    stats.revenue =
                                        revenueRow.revenue || 0;

                                    res.json(stats);

                                }
                            );

                        }
                    );

                }
            );

        }
    );

};

module.exports = {
    getDashboardStats,
};