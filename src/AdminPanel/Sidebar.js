import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/orders">Orders</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/returns">Returns</Link>
      <Link to="/admin/sellers">Sellers</Link>
    </div>
  );
}

export default Sidebar;
