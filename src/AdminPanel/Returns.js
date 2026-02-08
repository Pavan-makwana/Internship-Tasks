import "./Returns.css";

function Returns() {
  return (
    <div className="seller-returns-page">
      <h2>Return Requests</h2>

      {/* Top bar – ONLY Search */}
      <div className="top-bar">
        <input type="text" placeholder="Search" />
      </div>

      <p className="info-text">
        Auto stock deduction will happen after order confirmation.
      </p>

      <table className="returns-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Seller</th>
            <th>Reason</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>105</td>
            <td>John</td>
            <td>FreshGrocer</td>
            <td>Received Wrong Product</td>
            <td>2024-04-22</td>
            <td><span className="badge success">Approved</span></td>
            <td><button className="action-btn">Approve →</button></td>
          </tr>

          <tr>
            <td>103</td>
            <td>Priya</td>
            <td>QuickMart</td>
            <td>Defective Item</td>
            <td>2024-04-23</td>
            <td><span className="badge pending">Pending</span></td>
            <td><button className="action-btn">Approve →</button></td>
          </tr>

          <tr>
            <td>104</td>
            <td>Amit</td>
            <td>XYZ Store</td>
            <td>Defective Item</td>
            <td>2024-04-21</td>
            <td><span className="badge delivered">Delivered</span></td>
            <td><button className="action-btn">Approve →</button></td>
          </tr>

          <tr>
            <td>106</td>
            <td>Simon</td>
            <td>FreshGrocer</td>
            <td>Item is Damaged</td>
            <td>2024-04-20</td>
            <td><span className="badge warning">Warning</span></td>
            <td>
              <button className="action-btn">Approve</button>
              <button className="reject-btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="rules">
        <p>Rule: If orders ≥ 2 are cancelled by seller in a week, show warning label</p>
        <p><strong>If orders ≥ 5 are cancelled by sellers in a week then pause the product.</strong></p>
      </div>
    </div>
  );
}

export default Returns;
