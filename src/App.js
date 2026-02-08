import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./AdminPanel/AdminLayout";
import Dashboard from "./AdminPanel/Dashboard";
import Orders from "./AdminPanel/Orders";
import Products from "./AdminPanel/Products";
import Returns from "./AdminPanel/Returns";
import Sellers from "./AdminPanel/Sellers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* redirect */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />

        {/* admin layout */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="returns" element={<Returns />} />
          <Route path="sellers" element={<Sellers />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
