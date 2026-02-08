import { useNavigate } from "react-router-dom";
import "./User.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">MyShop</div>

      <div className="search-container">
        <input type="text" placeholder="Search for products..." />
        <button className="search-btn">Search</button>
      </div>

      <div className="menu">
        <button className="menu-item" onClick={() => navigate("/")}>
          Home
        </button>

        <button className="menu-item" onClick={() => navigate("/cart")}>
          Cart
        </button>

        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
