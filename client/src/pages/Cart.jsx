import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cart, removeFromCart } =
        useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const placeOrder = () => {
        const orders =
            JSON.parse(
                localStorage.getItem("orders")
            ) || [];

        orders.push({
            total,
            items: cart,
        });

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

        alert("Order Placed");
    };

    return (
        <div className="cart-page">
            <h1>My Cart</h1>

            {cart.length === 0 ? (
                <h3>Cart is Empty</h3>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="cart-item"
                        >
                            <h3>{item.name}</h3>

                            <p>₹{item.price}</p>

                            <button
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>Total: ₹{total}</h2>
                    <Link to="/checkout">
                        <button>
                            Place Order
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default Cart;