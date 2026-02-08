import "./Orders.css";

function Orders() {
  return (
    <div className="orders-page">
      <h2>Order Management</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Seller</th>
            <th>Qty</th>
            <th>Total (₹)</th>
            <th>Payment</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* HELLY - PLACED */}
          <tr>
            <td>#101</td>
            <td>Helly</td>
            <td>iPhone 14</td>
            <td>Apple Store</td>
            <td>1</td>
            <td>79,999</td>
            <td><span className="badge paid">Paid</span></td>
            <td>12-04-2024</td>
            <td><span className="status placed">Placed</span></td>
            <td>
              <button className="btn accept">Accept</button>
              <button className="btn reject">Reject</button>
            </td>
          </tr>

          {/* NISHA - SHIPPED */}
          <tr>
            <td>#102</td>
            <td>Nisha</td>
            <td>Headphones</td>
            <td>Boat</td>
            <td>2</td>
            <td>3,998</td>
            <td><span className="badge cod">COD</span></td>
            <td>13-04-2024</td>
            <td><span className="status shipped">Shipped</span></td>
            <td>
              <button className="btn view">View</button>
            </td>
          </tr>

          {/* HEMANSH - SHIPPED */}
          <tr>
            <td>#103</td>
            <td>Hemansh</td>
            <td>Decors</td>
            <td>Boat</td>
            <td>2</td>
            <td>3,998</td>
            <td><span className="badge cod">COD</span></td>
            <td>18-06-2025</td>
            <td><span className="status shipped">Shipped</span></td>
            <td>
              <button className="btn view">View</button>
            </td>
          </tr>

          {/* MITESH - PLACED (SAME AS HELLY) */}
          <tr>
            <td>#104</td>
            <td>Mitesh</td>
            <td>Bluetooth</td>
            <td>Apple</td>
            <td>1</td>
            <td>3,998</td>
            <td><span className="badge paid">Paid</span></td>
            <td>24-02-2025</td>
            <td><span className="status placed">Placed</span></td>
            <td>
              <button className="btn accept">Accept</button>
              <button className="btn reject">Reject</button>
            </td>
          </tr>

          {/* AISHA - PENDING */}
          <tr>
            <td>#105</td>
            <td>Aisha</td>
            <td>Laptop</td>
            <td>HP</td>
            <td>1</td>
            <td>45,000</td>
            <td><span className="badge cod">Online</span></td>
            <td>10-05-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>
              <button className="btn pending">Pending</button>
            </td>
          </tr>

          {/* SHAILYA - PENDING */}
          <tr>
            <td>#106</td>
            <td>Shailya</td>
            <td>Refrigerator</td>
            <td>LG</td>
            <td>2</td>
            <td>90,999</td>
            <td><span className="badge cod">Unpaid</span></td>
            <td>13-04-2024</td>
            <td><span className="status pending">Pending</span></td>
            <td>
              <button className="btn pending">Pending</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Orders;
