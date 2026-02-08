import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Admin.css";

function AdminLayout() {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
