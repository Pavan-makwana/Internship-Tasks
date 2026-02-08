import "./User.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>MyShop</h4>
          <p>
            Your one-stop shop for mobiles, electronics, fashion & home
            essentials.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@myshop.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 MyShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
