function AddProduct() {
  return (
    <div className="admin-page">
      <h1>Add Product</h1>

      <form className="product-form">
        <input placeholder="Product Name" />
        <input placeholder="Price" />
        <input placeholder="Image URL" />

        <button>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;