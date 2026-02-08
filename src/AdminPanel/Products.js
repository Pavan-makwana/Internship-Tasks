import "./Products.css";

function Products() {
  return (
    <div className="products-page">
      <h2>Product & Inventory</h2>

      <button className="add-product-btn">Add Product</button>

      <p className="info-text">
        Auto stock deduction will happen after order confirmation.
      </p>
    </div>
  );
}

export default Products;
