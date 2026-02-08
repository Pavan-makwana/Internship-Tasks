import "./Cart.css";

function Cart() {
  return (
    <div className="cart-container">
      <h2>My Cart</h2>

      <div className="empty-cart">
        <p>Your cart is empty</p>
        <p>Add products to see them here.</p>
      </div>
    </div>
  );
}

export default Cart;
