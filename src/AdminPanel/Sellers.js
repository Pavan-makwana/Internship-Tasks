import "./Sellers.css";

function Sellers() {
  const sellerData = [
    {
      orderId: "#101",
      customer: "Helly",
      product: "iPhone 14",
      seller: "Apple Store",
      totalOrders: 1,
      cancelled: 0,
      returned: 0,
    },
    {
      orderId: "#102",
      customer: "Nisha",
      product: "Headphones",
      seller: "Boat",
      totalOrders: 1,
      cancelled: 0,
      returned: 0,
    },
    {
      orderId: "#103",
      customer: "Hemansh",
      product: "Decors",
      seller: "Boat",
      totalOrders: 1,
      cancelled: 0,
      returned: 1,
    },
    {
      orderId: "#104",
      customer: "Mitesh",
      product: "Bluetooth",
      seller: "Apple",
      totalOrders: 1,
      cancelled: 0,
      returned: 0,
    },
    {
      orderId: "#105",
      customer: "Aisha",
      product: "Laptop",
      seller: "HP",
      totalOrders: 1,
      cancelled: 1,
      returned: 0,
    },
    {
      orderId: "#106",
      customer: "Shailya",
      product: "Refrigerator",
      seller: "LG",
      totalOrders: 1,
      cancelled: 0,
      returned: 1,
    },
  ];

  return (
    <div className="sellers-page">
      <h2>Seller / Order Performance</h2>

      <div className="seller-card-grid">
        {sellerData.map((item, index) => (
          <div className="seller-detail-card" key={index}>
            <h3>{item.customer}</h3>
            <p className="order-id">Order ID: {item.orderId}</p>

            <div className="info">
              <p><strong>Product:</strong> {item.product}</p>
              <p><strong>Seller:</strong> {item.seller}</p>
            </div>

            <div className="stats">
              <div className="stat">
                <span>Total Orders</span>
                <strong>{item.totalOrders}</strong>
              </div>
              <div className="stat cancelled">
                <span>Cancelled</span>
                <strong>{item.cancelled}</strong>
              </div>
              <div className="stat returned">
                <span>Returned</span>
                <strong>{item.returned}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sellers;
